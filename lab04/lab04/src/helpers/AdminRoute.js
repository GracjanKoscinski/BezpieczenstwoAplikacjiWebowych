import { useKeycloak } from "@react-keycloak/web";

const AdminRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 const role = keycloak.hasRealmRole("admin");
 return isLoggedIn && role ? children : null;
};

export default AdminRoute;