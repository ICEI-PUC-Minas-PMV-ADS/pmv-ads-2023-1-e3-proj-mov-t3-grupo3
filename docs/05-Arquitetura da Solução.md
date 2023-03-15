# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Processos e suas Respectivas Atividades
Nesta sessão, apresentaremos os modelos de gestão do projeto: BPMN, Tabelas, Gráficos ou Dashboards com no mínimo 5 indicadores de desempenho e metas para o processo de negócio e para o processo de desenvolvimento.

### Análise da Situação Atual

Atualmente em alguns bares, restaurantes, pizzarias etc., temos problemas com disponibilidade de cardápio, seja devido à demora de atendimento pelo garçom, ou por falta do cardápio em si. Além desse problema com a disponibilidade, ainda existe o problema com a manutenção, como o ajuste de valores, recuperação de danos, inclusão/exclusão de algum item etc. Como forma de melhoria para esse processo o cardápio digital solucionaria grande parte desses problemas, já que seria necessário apenas que o cliente baixe o app do estabelecimento e veja todo o cardápio, e o responsável por isso no estabelecimento faça o mesmo, porém com a função de adicionar itens ao cardápio. 

### Descrição Geral da Proposta

A proposta desenvolvida no projeto, trata-se de um app de cardápio em que os usuários possam apenas visualizar os itens, bem como seus valores, imagens, descrições etc., adicionados pelo responsável pela tarefa no estabelecimento. O projeto ficará limitado a isso devido ao nível de conhecimento da equipe não ser elevado e o tempo para a capacitação e desenvolvimento não ser o suficiente. Uma opção de melhoria para o projeto seria adicionar uma forma do usuário fazer um pedido baseado no número de sua mesa, sendo assim, o usuário master iria receber esse pedido e seria criado uma “comanda” digital.

### Processo 1 – Login do usuário master

Abrange o RF-001. 

![Processo 1](img/modelagem-1.png)

### Processo 2 – CRUD do cardapio

Abrange os RF-001 e RF-002.

Com relação à metodologia atual de criação de cardápios em estabelecimentos, esse processo traz grandes melhorias em relação aos métodos antigos. Agora, não é mais necessário atualizar um conjunto inteiro de cardápios físicos quando há apenas uma alteração em um item específico, evitando rasuras e garantindo um nível maior de profissionalismo e informatização. Além disso, essa metodologia também ajuda a evitar custos desnecessários.

![Processo 2](img/modelagem-2.png)

### Processo 3 – Visualização do cardapio

Abrange os RF-002, RF-003 e RF-004.

Tal processo traz consigo a melhoria de não depender mais de um garçom para trazer o cardápio até o cliente, permitindo até mesmo que ele visualize o cardápio de casa e planejar o que irá pedir com antecedência, o que resulta em um melhor planejamento.

![Processo 3](img/modelagem-3.png)

### Processo 4 – Avaliação do item do cardapio

Abrange os RF-003, RF-004 e RF-006.

Esse processo permite um "compartilhamento" de opninão acerca de um item do cardapio, auxiliando os usuarios a escolher a melhor opção.

![Processo 4](img/modelagem-4.png)

### Processo 5 – Enviar sugestões

Abrange o RF-007.

Permite que o usuário não necessite interagir pessoalmente com um gerente ou algum responsável para realizar alguma sugestão ou reclamação, dessa forma ajuda aqueles que são mais introspectivos a expressarem sua opinião

![Processo 5](img/modelagem-5.png)

### Processo 6 – Visualizar sugestões

Abrange os RF-007 e RF-008.

![Processo 6](img/modelagem-6.png)

## Indicadores de Desempenho

Indicadores de desempenho iniciais contemplando as funcionalidades previstas para serem desenvolvidas.

![Indicadores de Desempenho](img/indic-desempenho01.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
