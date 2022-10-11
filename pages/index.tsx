import { Box, Dialog, DialogActions, Grid, TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'




const Home: NextPage = () => {
  const {listaProfessores, nome, setNome, email, setEmail } = useIndex();

  return (
   <div>
    <Box sx={{ backgroundColor: 'secondary.main' }}>
    <Lista professores={listaProfessores}></Lista>
   </Box>

   <Dialog open={true} fullWidth PaperProps={{sx: {p: 5}}}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField
      label="Digite seu Nome"
      type="text"
      fullWidth
      value={nome}
      onChange={(e) => setNome(e.target.value)} 
      />
      </Grid>
      <Grid item xs={12}>
      <TextField
      label="Digite seu E-mail"
      type="email" 
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      />
      </Grid>
    </Grid>
<DialogActions sx={{mt: 5}}>
  <Button>Cancelar</Button>
  <Button>Marcar</Button>
</DialogActions>

   </Dialog>
   </div>
  )
}

export default Home
