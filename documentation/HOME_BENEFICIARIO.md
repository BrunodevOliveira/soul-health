# Página Home, para Beneficiários do plano de saúde

 <p>A página home beneficiário foi criada para ser o primeiro contato do beneficiário da SoulHealth após realizar seu login na página correspondente.</p>
 <p> Nesta página da aplicação o beneficiário terá contato com todas as possíbilidades de acesso disponíveis para usabilidade do seu plano de saúde.</p>
 <p>O acesso ao chatbot, que a partir desta página fica habilitado, ocorre devido ao acesso desta só ocorrer após autenticação do login, que é um pré requisito</p>

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Para acessar esta página na aplicação, o usuário precisará estar com seu login autenticado.

### 🔧 Instalação

Instalações dos pacotes descritos no <a href="/README.md">README.MD</a> do projeto.

## 📦 Desenvolvimento

### Menu navegação da página home beneficiario

 <p>Na parte superior da página, que corresponde a 1ª section contida no código html, o beneficiario terá acesso ao menu navegação onde poderá migrar entre: Planos e Benefícios, Saúde na Tela, Meus Dados e Meus Agendamentos</p>
 <p>A migração ocorre através da utilização de tabs linkadas aos IDs definidos para cada área.</p>
 <p>No arquivo typescript de nome homeUser, foi padronizado o método controlador da tab que estará ativa inicialmente quando a página for acessada, e nesta há a lógica de controle de como a exibição ocorrerá após outra tab ser selecionada. Este método se chama: handleActiveTab</p>
 <br />

 <p>A variável activeTab, tipada como string, recebe a princípio o id da tab que estará ativa quando a página for acessada</p>
 <p>Em seguida, o método handleActiveTab é declarado com o "tab" sendo seu parâmetro principal, tipado como string, e como linha de comando do método, a variável "activeTab" recebe o parâmetro "tab" que for selecionado</p>
 <img src="/documentation/assets/controlerTab.png">
 <br />
 <br />

<ul>
<li> Os 2 primeiros setores linkados mostram dados correspondentes a Planos e Benefícios, e do Saúde na tela que é uma funcionalidade específica do plano de saúde.
 <img src="/documentation/assets/menuNavegacao.png">
 <br />
 <br />
 <img src="/documentation/assets/saudenatela.png">
</li>
 <br />
 <br />

<p>As outras 2 funcionalidades estão detalhadas nas documentações abaixo:</p>

<li><a href="/documentation/MEUS_DADOS.md">Meus Dados</a></li>
<li><a href="/documentation/MEUS_AGENDAMENTOS.md">Meus Agendamentos</a></li>
</ul>

### Acessos Rápidos

<p>A parte central da página, que corresponde a 2ª section do html, mostra em um container 4 cards com links de acessos rápidos, que direcionam o usuário para as páginas correspondentes ao conteúdo do título "h5"</p>
 <img src="/documentation/assets/acessos.png">

### Canais de Atendimento

<p>Na parte inferior da página, correspondente a 3ª section, está contida o "accordion" onde os telefones de contato podem ser consultados.</p>

 <img src="/documentation/assets/acordion.png">

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
