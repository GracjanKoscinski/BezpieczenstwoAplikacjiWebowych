import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "keycloak-react-auth",
 clientId: "PKCE-client",
});

export default keycloak;