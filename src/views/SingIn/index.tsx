import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import fakeUser from "./fakeLogin.json";
import { TextField, Button, Typography, Card, CardContent } from "@mui/material";

const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("email")) {
            navigate("/AT-Desenvolvimento-Web-com-React/");
        }
    }, [navigate]);

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === fakeUser.email && password === fakeUser.password) {
            localStorage.setItem("email", email);
            navigate("/AT-Desenvolvimento-Web-com-React/");
        } else {
            setError("Email ou senha incorretos!");
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    padding: "2rem",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    textAlign: "center",
                    maxWidth: "400px",
                    width: "100%",
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: "#003163", fontWeight: "bold" }}>
                    Login
                </Typography>

                <Typography variant="subtitle1" gutterBottom sx={{ color: "#00A0E3", marginBottom: "1rem" }}>
                    Bem-vindo! Faça login para continuar.
                </Typography>

                <Card
                    sx={{
                        backgroundColor: "#f8f8f8",
                        padding: "1rem",
                        marginBottom: "1.5rem",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <CardContent>
                        <Typography variant="subtitle2" sx={{ color: "#ff6b6b", fontWeight: "bold" }}>
                            Informações para Login:
                        </Typography>
                        <Typography variant="body2">
                            <strong>Email:</strong> seuemail@exemplo.com
                        </Typography>
                        <Typography variant="body2">
                            <strong>Senha:</strong> suasenha123
                        </Typography>
                    </CardContent>
                </Card>

                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ marginBottom: "1.5rem" }}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginBottom: "1.5rem" }}
                    />

                    {error && (
                        <Typography color="error" variant="body2" sx={{ marginBottom: "1rem" }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{
                            backgroundColor: "#1e90ff",
                            color: "#FFFFFF",
                            padding: "10px 20px",
                            fontSize: "1rem",
                            "&:hover": {
                                backgroundColor: "#002244",
                            },
                        }}
                    >
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
