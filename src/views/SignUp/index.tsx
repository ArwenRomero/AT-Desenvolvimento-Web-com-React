import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Link } from '@mui/material';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && password) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', password);
      navigate('/AT-Desenvolvimento-Web-com-React/signin');
    } else {
      setError('Todos os campos são obrigatórios!');
    }
  };

  const handleNavigate = () => {
    navigate('/AT-Desenvolvimento-Web-com-React/signin');
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '2rem',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#1e90ff', fontWeight: 'bold' }}>
          Cadastre-se
        </Typography>

        <Typography variant="subtitle1" gutterBottom sx={{ color: '#00A0E3', marginBottom: '1rem' }}>
          Crie sua conta para continuar.
        </Typography>

        <form onSubmit={handleSignUp}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: '1.5rem' }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: '1.5rem' }}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: '1.5rem' }}
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ marginBottom: '1rem' }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: '#1e90ff',
              color: '#FFFFFF',
              padding: '10px 20px',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#002244',
              },
            }}
          >
            Cadastrar
          </Button>
        </form>

        <Typography variant="body2" sx={{ marginTop: '1.5rem' }}>
          Já tem uma conta?{' '}
          <Link
            href="#"
            onClick={handleNavigate}
            sx={{ color: '#00A0E3', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Faça login
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
