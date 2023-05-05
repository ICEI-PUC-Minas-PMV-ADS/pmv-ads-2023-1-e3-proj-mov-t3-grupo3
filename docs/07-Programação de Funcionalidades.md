# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descrita por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos com os artefatos criados (código fonte), deverão apresentadas as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Por exemplo: a tabela a seguir deverá ser preenchida considerando os artefatos desenvolvidos.

<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Descrição do Requisito</th>
        <th colspan="2">Artefato(s) produzido(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RF-001</td>
        <td>O aplicativo deve conceder ao usuário master uma forma de login.</td>
        <td><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/tree/main/src/cardappio/src/pages/Login">Pagina de login</a> e <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/src/cardappio/src/common/context/useUser.js">useUser.js</a></td>
        <td><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/docs/img/LoginCardappio.png" style="width: 200px;"></td>
      </tr>
      <tr>
        <td>RF-002</td>
        <td>O aplicativo deve conceder ao usuário master a opção de cadastrar/editar/excluir itens do cardápio digital.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RF-003</td>
        <td>O aplicativo deve conceder ao usuário master a opção de cadastrar/editar/excluir informações sobre o estabelecimento.</td>
        <td><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/tree/main/src/cardappio/src/pages/Sobre">Pagina sobre</a> e <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/src/cardappio/src/common/context/useTextoInfo.js">useTextoInfo.js</a></td>
        <td><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/docs/img/editInfo.png" style="width: 200px;"> <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/docs/img/novaInfo.png" style="width: 200px;"></td>
      </tr>
      <tr>
        <td>RF-004</td>
        <td>O aplicativo deve permitir que o usuário visualize todos os itens cadastrados no cardápio digital (sejam eles alimentos ou bebidas) por meio de fotos.</td>
        <td><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/tree/main/src/cardappio/src/pages/Cardapio">Pagina Home</a> e <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/src/cardappio/src/common/context/useItens.js">useItens.js</a></td>
        <td><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/docs/img/ListaCardappio.png" style="width: 200px;"></td>
      </tr>
      <tr>
        <td>RF-005</td>
        <td>O aplicativo deve permitir que o usuário faça uma busca/filtre por um determinado item desejado no cardápio digital..</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RF-006</td>
        <td>O aplicativo deve apresentar a descrição e/ou composição do item selecionado pelo usuário.</td>
        <td><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/tree/main/src/cardappio/src/pages/Item">Pagina do item</a></td>
        <td><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-grupo3/blob/main/docs/img/ItemCardappio.png" style="width: 200px;"></td>
      </tr>
      <tr>
        <td>RF-007</td>
        <td>O aplicativo deve conceder ao usuário a opção de avaliar determinado item do cardápio.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RF-008</td>
        <td>O aplicativo deve permitir que o usuário envie sugestões de forma anônima para o estabelecimento.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RF-009</td>
        <td>O aplicativo deve permitir que o usuário master visualize as sugestões anonimas enviadas pelos usuários.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>RNF-004</td>
        <td>O aplicativo deve estar disponível também no idioma inglês.</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
</table>







# Instruções de acesso

• Para hospedar nossa aplicação utilizamos a plataforma "---", cujo link de acesso encontra-se disponível através do URL: 

• Nossa aplicação conta com um usuário Admin para cadastros essenciais para um bom funcionamento do sistema.

• Para a visualização completa do sistema, é necessário estar cadastrado e logado na plataforma.  

