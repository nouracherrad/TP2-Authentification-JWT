import { useEffect, useState } from "react";
import api from "../api/api";
import { logout } from "../auth";

export default function ProtectedPage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        api.get("/hello")
            .then((res) => setMessage(res.data.message))
            .catch(() => setMessage("Erreur ou token expiré"));
    }, []);

    return (
        <div style={{ margin: 40 }}>
            <h2>Page protégée</h2>
            <p>{message}</p>
            <button onClick={() => { logout(); window.location.reload(); }}>
                Déconnexion
            </button>
        </div>
    );
}
