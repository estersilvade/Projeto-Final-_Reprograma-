# 🐞 Relatório de Bugs — Help Vizinhos API

Bugs encontrados com testes automatizados de API (Postman + Newman), rodando no GitHub Actions com MongoDB.

- **Testes:** `tests/help-vizinhos.postman_collection.json`
- **Como rodar:** veja a seção [Como rodar os testes](#-como-rodar-os-testes)
- **Ambiente:** Node.js 18 · MongoDB 5.0 · Express 4 · Mongoose 6

## Resumo

| ID | Título | Severidade | Teste |
|----|--------|-----------|-------|
| BUG-10 | API cai no login com e-mail que não existe | 🔴 Crítica | CT18, CT19 |
| BUG-11 | API cai ao atualizar sem token | 🔴 Crítica | CT20, CT21 |
| BUG-08 | Rotas privadas não exigem token | 🔴 Crítica | CT12 |
| BUG-02 | Senha (hash) aparece nas respostas | 🟠 Alta | CT03, CT07, CT10 |
| BUG-03 | Duas pessoas não podem morar no mesmo bairro | 🟠 Alta | CT04 |
| BUG-07 | Nova senha não funciona no login | 🟠 Alta | CT10, CT11 |
| BUG-01 | Valor do serviço não é salvo | 🟡 Média | CT02 |
| BUG-05 | Campos obrigatórios não são validados | 🟡 Média | CT06 |
| BUG-04 | E-mail repetido retorna erro 500 | 🟡 Média | CT05 |
| BUG-09 | Excluir ID inexistente retorna sucesso | 🟢 Baixa | CT13 |
| BUG-06 | Senha errada retorna 422 em vez de 401 | 🟢 Baixa | CT09 |
| BUG-12 | README diferente do código | 🟢 Baixa | — |

---

## 🔴 BUG-10 — API cai no login com e-mail que não existe

**Passos**
1. `POST /login` com `{"email": "naoexiste@teste.com", "password": "x"}`
2. `GET /`

**Esperado:** `401` no login. A API continua no ar.
**Obtido:** `422` no login. Logo depois a API **para de funcionar** (`ECONNREFUSED`).

**Causa:** em `src/controllers/user.js`, a função `login` envia a resposta quando o usuário não existe, mas **não tem `return`**. O código continua, tenta ler `user.password` de `null` e quebra. O erro tenta enviar uma segunda resposta e derruba o processo.

---

## 🔴 BUG-11 — API cai ao atualizar sem token

**Passos**
1. `PATCH /atualizar` sem o cabeçalho `Authorization`
2. `GET /`

**Esperado:** `401 - Token ausente`. A API continua no ar.
**Obtido:** a conexão é cortada (`ECONNRESET`) e a API **para de funcionar**.

**Causa:** em `updateUser`, a leitura do token (`authHeader.split(...)` e `jwt.verify`) fica **fora do `try`**.

---

## 🔴 BUG-08 — Rotas privadas não exigem token

**Passos**
1. `DELETE /delete/{id}` **sem** token

**Esperado:** `401`.
**Obtido:** `200`. O usuário é apagado. Qualquer pessoa pode apagar qualquer cadastro.

**Causa:** as rotas marcadas como "privada" não usam nenhum middleware de autenticação. O mesmo vale para `DELETE /prof/excluir/:id` e `POST /prof/criar`.

---

## 🟠 BUG-02 — Senha (hash) aparece nas respostas

**Passos**
1. `POST /register` com dados válidos
2. `GET /all`

**Esperado:** nenhuma resposta traz o campo `password`.
**Obtido:** `password` aparece no cadastro, na lista de prestadores e na atualização. A rota `GET /prof/lista/:id` também expõe.

---

## 🟠 BUG-03 — Duas pessoas não podem morar no mesmo bairro

**Passos**
1. Cadastrar a pessoa A com `"bairro": "Centro"`
2. Cadastrar a pessoa B (outro e-mail) com `"bairro": "Centro"`

**Esperado:** `201`. A ideia da API é unir vizinhos da mesma região.
**Obtido:** `500` (erro de chave duplicada no MongoDB).

**Causa:** em `src/models/usuarios.js`, o campo `bairro` está com `unique: true`.

---

## 🟠 BUG-07 — Nova senha não funciona no login

**Passos**
1. Fazer login e pegar o token
2. `PATCH /atualizar` com `{"password": "NovaSenha@456"}`
3. `POST /login` com a senha nova

**Esperado:** `200` com token.
**Obtido:** `422 - Senha incorreta`. A pessoa não consegue mais entrar com a senha nova.

**Causa:** `updateUser` salva a senha nova **sem criptografar** (sem `hashPassWord`). No login, o `bcrypt.compare` falha.

---

## 🟡 BUG-01 — Valor do serviço não é salvo

**Passos**
1. `POST /prof/criar` com `"valor": 150`

**Esperado:** o serviço é salvo com `valor: 150` e retorna `201`.
**Obtido:** `200` e o campo `valor` não aparece.

**Causa:** o modelo (`prof_model.js`) usa `Valor` (V maiúsculo). O controller usa `valor` (minúsculo).

---

## 🟡 BUG-05 — Campos obrigatórios não são validados

**Passos**
1. `POST /register` só com `password` e `bairro`

**Esperado:** `400` informando os campos que faltam.
**Obtido:** `201`. O cadastro é salvo sem nome e sem e-mail.

**Causa:** em `usuarios.js` está escrito `require: true`. O certo no Mongoose é `required: true`.

---

## 🟡 BUG-04 — E-mail repetido retorna erro 500

**Passos**
1. Cadastrar um usuário
2. Cadastrar outro com o mesmo e-mail

**Esperado:** `400 - E-mail já cadastrado`.
**Obtido:** `500` com a mensagem técnica do MongoDB (`E11000 duplicate key...`).

---

## 🟢 BUG-09 — Excluir ID inexistente retorna sucesso

**Passos**
1. `DELETE /delete/000000000000000000000000`

**Esperado:** `404 - Usuário não encontrado`.
**Obtido:** `200 - Usuário deletado com sucesso`.

**Observação:** um ID em formato inválido (ex: `/delete/abc`) retorna `500`. O esperado seria `400`.

---

## 🟢 BUG-06 — Senha errada retorna 422 em vez de 401

**Esperado:** `401 Unauthorized`, que é o padrão para credenciais inválidas.
**Obtido:** `422`.

**Também:** a mensagem de login com sucesso é `"Senha Acho que foi"`. Sugestão: `"Login realizado com sucesso"`.

---

## 🟢 BUG-12 — README diferente do código

| Item | README | Código |
|------|--------|--------|
| Variável do banco | `MONGODB_URL` | `MONGO_URI` |
| Porta local | `8084` | `8087` |
| Comando para rodar | `npm dev` | `npm start` |
| Rota de atualizar | `POST` | `PATCH` |
| Rota de criar serviço | `GET` | `POST` |
| Variável do token | não citada | `SECRET` |

**Outros pontos do código**
- `src/helpers/auth.js`: no `catch`, `mensage. error` não existe e gera outro erro.
- O arquivo `.GITIGNORE` em maiúsculas não é reconhecido pelo Git no Linux/Mac. O nome certo é `.gitignore`.

---

## ▶️ Como rodar os testes

**No GitHub:** os testes rodam sozinhos a cada envio de código (aba **Actions**).

**No seu computador:**
1. Tenha um MongoDB rodando (local ou MongoDB Atlas).
2. Crie o arquivo `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/helpvizinhos
   SECRET=qualquer-segredo
   PORT=8087
   ```
3. Rode:
   ```bash
   npm install
   npm install -g newman newman-reporter-htmlextra
   bash tests/run.sh
   ```
4. Os relatórios ficam na pasta `reports/`.
