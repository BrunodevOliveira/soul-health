# Navbar

Cabeçalho de navegação da aplicação.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

Não há. Este componente pode ser visto e acessado em qualquer parte da aplicação.

### 🔧 Instalação

Instalações dos pacotes descritos no <a href="/README.md">README.MD</a> do projeto.

## 📦 Desenvolvimento

### Navbar
<p>A Navbar é composta pos duas navbars uma superior (div header Navbar) e uma inferior (header)</p>
<img src="/documentation/assets/Header_Navbar.png">
<br/>
<p>Na parte superior esquerda da navbar, que corresponde a 1ª div contida no código HTML, o usuário terá acesso aos links das redes sociais da aplicação através dos ícones de cada rede respectivamente Facebook, Twitter, Instagram e Whatsapp.</p>
<p>Na parte inferior esquerda da navbar, que corresponde a div fancy-navbar contém a imagem da logo principal, que a partir do breakpoint 575px a imagem é substituida pela logo secundária</p>
<img src="/documentation/assets/Navbar_respons2.png">
<br/>

<p>Na parte superior central da navbar que corresponde a div listCenter o usuário terá acesso aos links de telefone e email de contato. Ao clicar sobre o número de telefone e/ou sobre o e-mail o usuário será redirecionado para uma chamada ou para seu e-mail.
A navbar está responsiva, ao chegar no breakpoint 920px a div listCenter é ocultada e ficam apenas os links de redes sociais e o botão de login.</p>
<p>Na parte inferior central foi utilizado uma navbar offcanvas, onde se pode acessar as páginas Home, Sobre, Departamentos e Cadastro através dos links. A partir do breakpoint 991px os links são ocultados e transferidos para um menu lateral que pode ser acessado através do botão.</p>
<p>- Botão Lateral da navbar</p>
<img src="/documentation/assets/Navbar_respons.png">
<br/>
<p>- Menu Lateral da navbar</p>
<img src="/documentation/assets/menuLateral_navbar.png">
<br/>

<p>Na parte superior direita da navbar que corresponde a div listRight o usuário terá acesso ao botão de login (Entrar) ao clicar ele será redirecionado para a página de login, após realizar o login o botão muda para um ícone de usuário e ativa um menu dropdown.</p>
<img src="/documentation/assets/btn_header_navbar_dropdown.png">
<br/>
<p>Tudo foi construído através da diretiva ngIf e as tags ng-container e ng-template.</p>
<img src="/documentation/assets/ngif_navbar.png">
<br/>

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## 📌 Versão

Nós usamos [Github](https://github.com/) para controle de versão. 

## ✒️ Autores

- **Bruno Gomes** - (https://github.com/BrunodevOliveira)
- **Camila Silva** - (https://github.com/CamiMSilva)
- **Jaqueline Rodrigues** - (https://github.com/agorasoudev)
- **Lucélia Batista** - (https://github.com/Luceliabatista)
- **Silas Sousa** - (https://github.com/SilasSousadeJesus)
