# Pagina de Login

  Pagina de login e autenticação de beneficarios. Esta a autenticação deste pagina é pre-requisto para acessar as paginas para beneficiarios que estão protegidas por guarda de rotas.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação

Instalações dos pacotes descritos no <a href="/README.md">README.MD</a> do projeto.

## 📦 Desenvolvimento

  <p>Pagina com a função de login do beneficiario. Este componete html coleta os dados por meio de um formulario, passa esses dados como parametros para a função signin, que por sua vez passa esses parametros para o serviço que espera receber um objeto (user) pra se relacionar como endpoint que fará as verificações para identificar se a senha e o email correspondem ao que esta salvo e encriptografado no banco de dados. Caso as informações correspondam, o backend envia como resposta um token de autenticação do usuario. </p>

  <p>O fluxo continua com o serviço trazendo o token de autenticação para o signin componente.ts, este componente.ts alocará no localStorage o token de autenticação e enviar o usuario para pagina de login</p>

   <img src="/documentation/assets/loginpage.png">

  <h4>Validações de formulario</h4>

  <p>  O formulario de login possui validações para os campos, não permitindo campos vazios, erros de senhas ou de usuario (email). O botão de login so habiita no caso dos campos estarem corretamente preenchidas. Caso acha consecutivas tentaivas de login com senha ou usuario invalidos, surge um reCAPTCHA pra confirma se é de fato uma interação humana ou um boot.</p>
   <img src="/documentation/assets/loginpagevalidacoes.png">
  <hr>


## 🛠️ Construído com

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [TypeScript](https://www.typescriptlang.org/)

## 📌 Versão

Nós usamos o GitHub para controle de versão.

## ✒️ Autores

- **Bruno Gomes** - (https://github.com/BrunodevOliveira)
- **Camila Silva** - (https://github.com/CamiMSilva)
- **Jaqueline Rodrigues** - (https://github.com/agorasoudev)
- **Lucélia Batista** - (https://github.com/Luceliabatista)
- **Silas Sousa** - (https://github.com/SilasSousadeJesus)
