# WebApp de Gerenciamento dos Primeiros Meses do Bebê  

## Sobre o Projeto  
Este projeto tem como objetivo consolidar os conhecimentos adquiridos ao longo da disciplina, resultando em uma aplicação web prática e alinhada às exigências do mercado de trabalho.  

O **WebApp de Gerenciamento dos Primeiros Meses do Bebê** foi desenvolvido para auxiliar pais no acompanhamento das necessidades essenciais de seus filhos recém-nascidos. A aplicação permite registrar e visualizar informações sobre alimentação, sono e trocas de fralda, garantindo um histórico organizado e acessível.  

## Funcionalidades  
- **Autenticação**: Simulação de login com JSON fake.  
- **Multi-idioma**: Suporte a **Português, Inglês e Espanhol** utilizando **i18n Next**.  
- **Cadastro de Conta**: Tela para registro de novos usuários.  
- **Gestão do Bebê**: Registro de **peso, comprimento e nome** do bebê.  
- **Gerenciamento de Rotina**:  
  - Registro de trocas de fralda com status e observações.  
  - Registro de períodos de sono com horário e notas adicionais.  
  - Registro de amamentação, com opção de **mamadeira** (quantidade) ou **seio** (lado direito, esquerdo ou ambos).  
- **Histórico Ordenado**: Listagem de registros do mais recente para o mais antigo.  
- **Configurações**:  
  - Alteração do idioma da aplicação.  
  - Atualização das informações do bebê.  
  - Opção de logout.  
- **Armazenamento Local**: Utilização do **LocalStorage** para persistência dos dados.  

## Tecnologias Utilizadas  
- **React.js**  
- **React Router DOM**  
- **Material UI**  
- **i18n Next**  
- **Supabase (Back-end como serviço)**  
- **LocalStorage para armazenamento de dados**

## Como Executar o Projeto  
1. Clone este repositório para sua máquina local.  
2. Instale as dependências utilizando `npm install` ou `yarn install`.  
3. Configure as variáveis de ambiente para integração com o **Supabase**.  
4. Inicie o projeto com `npm start` ou `yarn start`.  
5. Acesse o WebApp através do navegador.  
