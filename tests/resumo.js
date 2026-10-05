// Junta os resultados do Newman e mostra um resumo no GitHub Actions.
const fs = require('fs');
const path = require('path');
const pasta = 'reports';
const linhas = [];
let passou = 0, falhou = 0;
for (const arq of fs.readdirSync(pasta).filter(f => f.endsWith('.json')).sort()) {
  const run = JSON.parse(fs.readFileSync(path.join(pasta, arq))).run;
  for (const ex of run.executions) {
    const status = ex.response ? ex.response.code : 'SEM RESPOSTA';
    for (const a of ex.assertions || []) {
      const ok = !a.error;
      ok ? passou++ : falhou++;
      linhas.push(`${ok ? '✅' : '❌'} ${ex.item.name} | ${a.assertion} | status ${status}`);
    }
    if (ex.requestError) { falhou++; linhas.push(`❌ ${ex.item.name} | erro de conexão: ${ex.requestError.code || ex.requestError.message}`); }
  }
}
const texto = [`Passou: ${passou} | Falhou: ${falhou}`, ...linhas].join('\n');
console.log(texto);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, '## Resultado dos testes\n\n```\n' + texto + '\n```\n');
}
console.log('::notice title=Resultado dos testes::' + texto.replace(/%/g, '%25').replace(/\n/g, '%0A'));
