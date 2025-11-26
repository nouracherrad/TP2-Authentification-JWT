import { useState } from "react";
import api from "../api/api";
import { saveToken } from "../auth";

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", { username, password });
            saveToken(res.data.token);
            onLogin();
        } catch {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div style={{ margin: 40 }}>
            <h2>Connexion</h2>
            <form onSubmit={login}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" /><br/><br/>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

