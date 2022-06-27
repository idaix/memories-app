import { useEffect } from 'react'

// redux import
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import logo from "./images/logo.png"

import './App.css'
import { Form, Navbar, Posts } from './components';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      <Navbar logo={logo} />
      <Container maxWidth="lg" className='mt-5'>
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
    </div>
  );
}

export default App;
