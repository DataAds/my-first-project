import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const MENU_ITEMS = ['Dashboard','Campaigns','Sources','Reports','Settings','Help'];

export default function MainMenu() {
  return (
    <Box
      sx={{
        width: 1440, height: 900, bgcolor: '#FFFFFF',
        display: 'flex', flexDirection: 'row'
      }}
    >
      {/* Левая панель */}
      <Box
        sx={{
          width: 300, height: 900, bgcolor: '#D9D6FE',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3
        }}
      >
        {/* Лого */}
        <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 4 }}>DataAds</Typography>

        {/* Меню */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {MENU_ITEMS.map((item, i) => (
            <Button
              key={i}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 400,
                color: '#2C2C2C',
                borderRadius: 1,
                '&:hover': { bgcolor: '#8098F9', color: '#FFFFFF' }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Футер */}
        <Box
          sx={{
            borderTop: '1px solid #717680',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 80,
            pr: 3
          }}
        >
          <Button
            sx={{
              width: 136, height: 40,
              borderRadius: 2,
              bgcolor: '#FFFFFF',
              border: '1px solid rgba(44,44,44,1)',
              textTransform: 'none',
              mr: 2
            }}
          >
            Кнопка
          </Button>
          <IconButton
            sx={{
              width: 40, height: 40,
              borderRadius: 2,
              bgcolor: '#FFFFFF',
              border: '1px solid rgba(44,44,44,0.15)'
            }}
          >
            <SettingsRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Контент справа */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4">Главная страница</Typography>
      </Box>
    </Box>
  );
}
