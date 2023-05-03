# Registro de Testes de Software

## 1 - Introdução

Este documento descreve os requisitos a testar, os  tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e os resultados de cada teste. 

## 2 - Casos de Teste
Esta seção contem os casos de teste referentes aos casos de uso e não funcionais identificados ao longo do desenvolvimento do projeto.

### Casos de uso:

| **Caso de Teste** 	| **CT-01 – Login do usuário master** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001	O aplicativo deve conceder ao usuário master uma forma de login. |
| Objetivo do Teste 	| Verificar se o usuário consegue fazer login na aplicação. |
| Passos 	| - Acessar a aplicação; <br> - Clicar em "Entrar"; <br> - Preencher os campos obrigatórios (usuário e senha); <br> - Clicar em "Login"; <br> |
|Critério de Êxito |Redirecionamento para a tela com os ítens do cardápio. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Adicionar ítens do cardápio** 	|
|	Requisito Associado 	|RF-002	O aplicativo deve conceder ao usuário master a opção de cadastrar /editar/excluir itens do cardápio digital;<br>RF-003	O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos.
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar ítens ao cardápio com sucesso. |
| Passos 	| - Acessar a tela inicial; <br> - Acessar o campo de listar ítens; <br> - Inserir novos dados; <br> - Confirmar inserção; <br> - Visualizar mensagem de confirmação efetuada com sucesso; |
|Critério de Êxito | - O ítem cadastrado estará listado na tela inicial. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-03 –Editar ítens do cardápio** 	|
|	Requisito Associado 	| RF-002 - O aplicativo deve conceder ao usuário master a opção de cadastrar /editar/excluir itens do cardápio digital. <br> RF-003	O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos. <br> |
| Objetivo do Teste 	| Verificar se o usuário consegue editar ítens do cardápio com sucesso. |
| Passos 	| -Acessar a tela inicial; <br> - Visualizar o ítem listado a ser editado; <br> -Acessar o campo de edição do ítem; <br> -Editar os dados; <br> - Clicar no botão de confirmar a ação; <br> - Visualizar mensagem de confirmação efetuada com sucesso. |
|Critério de Êxito | - O ítem editado estará listado de forma atualizada na tela inicial. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Excluir ítens do cardápio** 	|
|	Requisito Associado 	| RF-002	O aplicativo deve conceder ao usuário master a opção de cadastrar /editar/excluir itens do cardápio digital. <br> RF-003	O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos. |
| Objetivo do Teste 	| Verificar se o usuário consegue excluir ítens do cardápio com sucesso. |
| Passos 	| - Acessar a tela inicial; <br> - Visualizar o ítem listado a ser excluído; <br> - Acessar o campo de exclusão do ítem; <br> - Confirmar a ação; <br> - Visualizar mensagem de confirmação efetuada com sucesso; |
|Critério de Êxito | -O ítem exluído não será apresentado na tela inicial. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Visualização do cardápio** 	|
|	Requisito Associado 	| RF-003	O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos. <br> RF-004	O aplicativo deve permitir que o usuário faça uma busca/filtre por um determinado item desejado no cardápio digital. <br> RF-005	O aplicativo deve apresentar a descrição e/ou composição do item selecionado pelo usuário. |
| Objetivo do Teste 	| Verificar se o usuário cliente do restaurante consegue navegar e visualizar as informações do cardápio. |
| Passos 	| - Acessar a tela inicial; <br> - Selecionar um ítem do cardápio; <br> - Visualizar a imagem, descrição e preço. |
|Critério de Êxito | - O cardápio, ítem, descrição e preço foi visualizado com sucesso. |
|Resultado| Ao selecionar um item, ele é expandido, melhorando a visualização dos detalhes |
|Registro| <img src="https://user-images.githubusercontent.com/103212087/236045433-6485df7e-29a4-49d9-bb80-13361cf35afe.gif" width=30% height=30%> |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Avaliar ítem do cardápio** 	|
|	Requisito Associado 	| RF-003	O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos. <br> RF-004 O aplicativo deve permitir que o usuário faça uma busca/filtre por um determinado item desejado no cardápio digital. <br> RF-006 O aplicativo deve conceder ao usuário a opção de avaliar determinado item do cardápio. |
| Objetivo do Teste 	|Verificar se o usuário consegue avaliar um ítem do cardápio. |
| Passos 	| - Acessar a tela principal do cardápio; <br> - Escolher um ítem; <br> - Acessar o campo de avaliação; <br> - Avaliar; <br> - Confirmar avaliação. |
|Critério de Êxito | - Após confirmar a avaliação o aplicativo retornará a tela inicial e o ítem estará com uma avaliação realizada. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Envio de sugestões** 	|
|	Requisito Associado 	| RF-007	O aplicativo deve permitir que o usuário envie sugestões de forma anônima para o estabelecimento. |
| Objetivo do Teste 	| Verificar se o usuário consegue enviar uma sugestão. |
| Passos 	| - Acessar a tela inicial; <br> - Acessar o campo de enviar sugestão; <br> - Escrever sugestão; <br> -Enviar o formulário. |
|Critério de Êxito | -Após alerta de "sugestão enviada com sucesso" o aplicativo direcionará o usuário para a tela principal. |
|Resultado| - |
|Registro| - |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Visualizar Sugestões** 	|
|	Requisito Associado 	| RF-008	O aplicativo deve permitir que o usuário master visualize as sugestões anonimas enviadas pelos usuários. |
| Objetivo do Teste 	|Verificar se o usuário master consegue visualizar uma sugestão de um cliente de seu estabelecimento. |
| Passos 	| - Acessar a tela inicial; <br> - Escolher uma sugestão da lista; <br> - Visualizar a susgestão escolhida.|
|Critério de Êxito | - A sugestão escrita por um cliente será apresentada para leitura. |
|Resultado| - |
|Registro| - |
|  	|  	|
