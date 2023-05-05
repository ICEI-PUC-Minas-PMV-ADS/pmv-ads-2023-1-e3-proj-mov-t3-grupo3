## O video é uma breve apresentação das funcionalidades até a entrega da etapa 3

## Configurando um servidor local com JSON Server e React Native/Expo

### Pré-requisitos:
- Node 16

*Obs: a versão LTS (18) não é funcional no Expo*

### Instruções:
1. Instale o JSON Server,  e o localtunel globalmente com o comando: 

   ```npm install -g json-server``` 
   ```npm install -g json-server-auth``` 
   ```npm install -g localtunnel```

   ou, caso ocorra um erro de permissão, utilize:

   ```sudo npm install -g json-server```
   ```sudo npm install -g json-server-auth```
   ```sudo npm install -g json-server-auth```


2. Execute o comando ```npm install``` para instalar os pacotes necessários.

3. No terminal, navegue até a pasta do seu banco de dados (db.json) e execute o comando:

   ```npx json-server-auth db.json```

   Esse comando irá iniciar o servidor na porta 3000.

4. Agora em outro terminal execute o comando 

   ```lt --port 3000```

   Esse comando pegara o banco de dados e ira criar um link com "mais segurança". Caso tenha iniciado em outra porta e não a 3000 basta alterar para a sua, por exemplo 3001, 3002 etc.

5. Para iniciar o projeto, execute o comando:

   ```npx expo start```

Isso deve ser suficiente para configurar um servidor local com JSON Server e Expo/React Native. Basta agora fazer as requisições HTTP para a URL do seu servidor, que por padrão será ``http://localhost:3000``, mas o local tunel diponibiliza um novo link, por exemplo ``https://smooth-buttons-agree-170-239-223-159.loca.lt`` para acessar. Com o link dsponibilizado basta substituir no arquivo urlApi.js, localizado dentro da pasta services, e alterar sua url base ``const BASE_URL = "link"``