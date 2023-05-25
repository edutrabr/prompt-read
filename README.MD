## PROMPT-READ

Esse projeto existe para facilitar as aulas de Estruturas de Dados. O objetivo dele é ser uma forma de facilitar o acesso ao STDIN para o Node.JS sem que seja muito complexo e seja preciso manipular I/O.

## Exemplo de uso

```
git clone //no projeto
npm install //dentro da pasta do projeto
node example.js //dentro da pasta do projeto
```

## Exemplo de uso (código)

Acessar o arquivo example.js

Auto detect data type

```bash
const data = prompt("Type: ");
const data = prompt("Type: ", "auto");
const data = prompt("Type: ", undefined);
```

Force string data type

```bash
const data = prompt("Type: ", "string");
```

Force number data type

```bash
const data = prompt("Type: ", "number");
```

Auto detect data array type and split array on ";"

```bash
const dataArray = prompt("Type: ", "auto", ";");
const dataArray = prompt("Type: ", undefined, ";");
```

Force string data array type and split array on ";"

```bash
const dataArray = prompt("Type: ", "string", ";");
```

Force number data array type and split array on ";"

```bash
const dataArray = prompt("Type: ", "number", ";");
```

## Estrutura

```
- index.js -> arquivo principal, onde esta a lógica de verificação de tipo de conversão
- util.js -> arquivo auxiliar de apoio para funções de conversões
- example.js -> arquivo demonstrando como funciona o prompt
- tests -> testes unitários
```

## Tests

Esse projeto usa o JEST para testes unitários, para rodar os testes basta digitar `npm test` em seu terminal.
