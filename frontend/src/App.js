import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import { getToken } from "./auth";

export default function App() {
  const [logged, setLogged] = useState(!!getToken());

  return logged ? (
      <ProtectedPage />
  ) : (
      <LoginPage onLogin={() => setLogged(true)} />
  );
}
