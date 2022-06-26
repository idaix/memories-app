import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import logo from "./images/logo.png"

import './App.css'
import { Form, Navbar, Posts } from './components';

function App() {
  return (
    <Container maxWidth="lg" style={{ backgroundColor:'red', }}>
      <Navbar />
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align='center'>Moment</Typography>
        <img src={logo} alt="moment logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container 
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid  item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid  item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
