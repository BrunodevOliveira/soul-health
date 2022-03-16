# Página de Médicos Credenciados.

A página exibe uma listagem de nomes, departamentos e locais de atendimento, de cada médico crendênciado do plano de saúde.

Nesta página é possível efetuar a busca por: 
<ul>
<li>Nome</li>
<li>Departamento</li>
<li>Local</li>
</ul>

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação

Instalações dos pacotes descritos no <a href="/README.md">README.MD</a> do projeto.

## 📦 Desenvolvimento

<p>A 1ª section no "accredited.component.html" foi construída para compor a view do campo de busca, conforme demonstrado abaixo:</p>
<br />
<img src="/documentation/assets/busca.png">
<br />
<br />
<p>Para a funcionalidade deste campo ser aplicada, no input foi incluída a tag "(change)="search($event)""</p>
<br />
<img src="/documentation/assets/input.png">
<br />
<br />

<p>Logo após, no arquivo "accredited.component.ts", a variável "searchValue" foi tipada como string(linha 19 da imagem abaixo), e depois disso foi então construído o método search(da linha 108 à 116) onde: </p>
<ul>
<li>Linha 109 - O elemento "searchValue" retorna o "value" recebido no evento "HTMLInputElement". Ou seja, o valor inserido pelo usuário no campo de busca.</li>
<li>Linha 110 à 113 - O elemento "doctors" é então criado para efetuar a comparação entre o "value" recebido no campo busca, e o e os valores inseridos no array dos dados exibidos em tela </li>
<li>Linha 114 - Retorna o resultado encontrato, utilizando o || (ou) para chegar ao resultado.</li>

<li>Linha 120 - Nesta, do método "ngOnInit", foi declarado que o elemento "doctors" recebe o array da listagem, antes declarado da linha 24 à 104 como "doctorList".</li>
</ul>
<br />
<img src="/documentation/assets/metodo.png">
<br />
<br />


<p>A 2ª section, construída no html, foi criada para exibir, em formato de tabela, a listagem dos dados para consulta baseando-se nas propriedades de interface: name, specialty e place, antes declarada no arquivo "accredited.componente.ts".
</p>
<img src="/documentation/assets/tabela.png">
<br />
<br />

<p>Este é o resultado encontrado na página:</p>

<img src="/documentation/assets/lista.png">
<br />
<br />
<p>E após uma busca o resultado esperado é este:</p>

<img src="/documentation/assets/pesquisa.png">
<br />
<br />

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
