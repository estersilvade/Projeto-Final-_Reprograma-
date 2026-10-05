#!/usr/bin/env bash
# Roda os testes da API. Cada bloco que derruba a API roda com o servidor reiniciado.
set -u
COLLECTION=tests/help-vizinhos.postman_collection.json
mkdir -p reports
FALHOU=0

subir_api() {
  node server.js > reports/server.log 2>&1 &
  API_PID=$!
  npx --yes wait-on -t 30000 http://localhost:${PORT:-8087}/
}

parar_api() { kill $API_PID 2>/dev/null; wait $API_PID 2>/dev/null; }

rodar() { # $1 = nome do relatório, demais = pastas
  local nome=$1; shift
  local pastas=(); for p in "$@"; do pastas+=(--folder "$p"); done
  subir_api
  npx --yes newman run "$COLLECTION" "${pastas[@]}" \
    -r cli,htmlextra --reporter-htmlextra-export "reports/$nome.html" || FALHOU=1
  parar_api
}

rodar 1-fluxo-principal "01 - Serviços" "02 - Usuários" "03 - Login e atualização" "04 - Exclusão e limpeza"
rodar 2-queda-no-login "05 - Queda no login"
rodar 3-queda-sem-token "06 - Queda sem token"

exit $FALHOU
