import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Успешное выполнение операции</Alert>
      <Alert severity="info">Информационное сообщение</Alert>
      <Alert severity="warning">Предупреждение</Alert>
      <Alert severity="error">Ошибка</Alert>
    </Stack>
  );
}
