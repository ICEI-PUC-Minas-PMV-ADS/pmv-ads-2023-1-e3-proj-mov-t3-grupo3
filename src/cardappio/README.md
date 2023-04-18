## Configurando um servidor local com JSON Server e React Native/Expo

### Pré-requisitos:
- Node 16

*Obs: a versão LTS (18) não é funcional no Expo*

### Instruções:
1. Instale o JSON Server globalmente com o comando: 

   ```npm install -g json-server``` 

   ou, caso ocorra um erro de permissão, utilize:

   ```sudo npm install -g json-server```

2. Execute o comando ```npm install``` para instalar os pacotes necessários.

3. No terminal, navegue até a pasta do seu banco de dados (db.json) e execute o comando:

   ```json-server --watch db.json --port 3001```

   Esse comando irá iniciar o servidor na porta 3001.

4. Para iniciar o projeto, execute o comando:

   ```npx expo start```

Isso deve ser suficiente para configurar um servidor local com JSON Server e Expo/React Native. Basta agora fazer as requisições HTTP para a URL do seu servidor, que por padrão será ``http://localhost:3001``. Caso sua porta seja diferente e queira configurar de outra maneira, lembre de entrar no arquivo urlApi.js, localizado dentro da pasta services, e alterar sua url base ``const baseUrl = "http://localhost:SuaPorta/"``
