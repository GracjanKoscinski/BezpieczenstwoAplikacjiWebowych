const Keycloak = require('keycloak-connect');
const express = require('express');
const app = express();

const config ={
    "realm": "demo-realm",
    "auth-server-url": "http://localhost:8080/",
    "ssl-required": "external",
    "resource": "express-app",
    "verify-token-audience": true,
    "credentials": {
      "secret": "amd6WHk1VHqMwLsZEjAImyrHcUEbVVrh"
    },
    "confidential-port": 0,
    "policy-enforcer": {}
  }

const keycloak = new Keycloak({},config);

app.use(keycloak.middleware());

app.get('/hello', keycloak.protect(), (_, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

