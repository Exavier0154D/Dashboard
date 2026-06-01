import './App.css'
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={5}>

      <Grid size={12}>Elemento: Encabezado</Grid>
      <Grid size={12}>Elemento: Alertas</Grid>
      <Grid size={12}>Elemento: Selector</Grid>
      <Grid size={12}>Elemento: Indicadores</Grid>
      <Grid size={12}>Elemento: Gráfico</Grid>
      <Grid size={12}>Elemento: Tabla</Grid>
      <Grid size={12}>Elemento: Información adicional</Grid>

    </Grid>
  );
}

export default App;