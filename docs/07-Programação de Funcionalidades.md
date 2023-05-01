# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descrita por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos com os artefatos criados (código fonte), deverão apresentadas as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Por exemplo: a tabela a seguir deverá ser preenchida considerando os artefatos desenvolvidos.

|ID    | Descrição do Requisito  | Artefato(s) produzido(s) |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir o usuário se cadastrar e fazer login na plataforma.   | Microsoft.AspNetCore.Identity.Entity.EntityFrameworkCore - Microsoft.AspNetCore.Identity.Entity.UI  | 
|RF-02| O sistema deve validar as informações de login do usuário.  | Microsoft.AspNetCore.Identity.Entity.EntityFrameworkCore - Microsoft.AspNetCore.Identity.Entity.UI |
|RF-03|O usuário deve conseguir alterar informações do seu perfil.  | UsuariosController.cs - Usuario.cs - Create.cshtml - Edit.cshtml - Perfil.cshtml  | 
|RF-04| O usuário terá a possibilidade de dar “likes” ou “pular” os perfis que forem apresentados. |  |
|RF-05|O sistema deve conectar usuários que trocaram “likes”. (Match)  |   | 
|RF-06|No perfil deve ser possível escolher filtros para a busca de usuários. |  |
|RF-07| Usuários que deram match devem conseguir se comunicarem por chat.  |   | 
|RF-08| O sistema deve permitir o usuário avaliar os perfis com quem obteve contato.   | |
|RF-09| O usuário deve conseguir visualizar os perfis dos demais usuários  |  UsuariosController.cs - Usuario.cs - Swipe.cshtml  |

# Instruções de acesso

• Para hospedar nossa aplicação utilizamos a plataforma "SmarterASP.NET", cujo o acesso encontra-se disponível através do link: http://efriender-001-site1.atempurl.com/

• Nossa aplicação conta com um usuário Admin para cadastros essenciais para um bom funcionamento do sistema. Esse usuário administrativo é acessado através das seguintes credenciais: (usuário - Admin / senha: Admin123!)

• Para a visualização completa do sistema, é necessário estar cadastrado e logado na plataforma.  

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
