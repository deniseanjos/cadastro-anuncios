# Cadastro de Anúncios

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.12.

2ª Parte do Desafio de Programação da Academia Capgemini - Sistema de cadastro de anúncios.

## Instalação

1. Clone o repositório: `git clone https://github.com/deniseanjos/cadastro-anuncios`
2. Abra no editor de sua preferência (exemplo: VS Code) e instale as dependências através do comando `npm install`

## Ambiente Local

No terminal, execute `ng serve -o` para que o projeto suba e abra o navegador automaticamente ou execute `ng serve` e acesse a url `http://localhost:4200/`

## Simulando o Back-End

Em outro terminal, execute o comando `npm install -g json-server` para instalar globalmente o servidor json. Após a instalação, execute `json-server --watch db.json` para que o servidor seja inicialidado na url `http://localhost:3000/`, onde é possível realizar requisições http

## Implementações e Melhorias Futuras

- [ ] Melhorar UX/UI;
- [ ] Implementar back-end com regras de negócio separadamente;
- [x] Validação de campos do formulário;
- [ ] Atualizar informações já cadastradas;
- [ ] Tratamento de erros.

## Problemática

Foram considerados os seguintes critérios fictícios para desenvolver o sistema de cadastro de anúncios:

Baseados em dados de análise de anúncios anteriores, a agência Divulga Tudo tem os seguintes dados:

- a cada 100 pessoas que visualizam o anúncio 12 clicam nele
- a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais
- cada compartilhamento nas redes sociais gera 40 novas visualizações
- 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido
- o mesmo anúncio é compartilhado no máximo 4 vezes em sequência (1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa

Com base nestes dados, o sistema permite o cadastro dos seguintes dados:
- nome do anúncio
- cliente
- data de início
- data de término
- investimento por dia

E fornece um relatório de cada anúncio contendo:
- o valor total investido
- quantidade máxima de visualizações
- quantidade máxima de cliques
- quantidade máxima de compartilhamentos

Os relatórios poderão ser filtrados pela data inicial ou final e cliente.
