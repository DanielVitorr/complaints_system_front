import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const authHeader = sessionStorage.getItem("authHeader");
        const response = await api.get("/users/me", {
          headers: {
            Authorization: authHeader
          }
        });
        setUser(response.data);
      } catch (error) {
        alert("Você não está autenticado");
      }
    }

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h1>Bem-vindo{user ? `, ${user.username} (CPF: ${user.cpf})` : ""}</h1>
    </div>
  );
}
