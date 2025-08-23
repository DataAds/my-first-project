import React from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#D9D6FE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 320 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Вход в DataAds
        </Typography>
        <TextField label="Логин" fullWidth sx={{ mb: 2 }} />
        <TextField label="Пароль" type="password" fullWidth sx={{ mb: 2 }} />
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: '#4A1FB8', '&:hover': { bgcolor: '#37208c' } }}
        >
          Войти
        </Button>
      </Paper>
    </Box>
  );
}
