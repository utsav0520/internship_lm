import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import React,{useState,useEffect} from "react";
import memories from './Images/memories.svg'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from './styles.js';
import { getPosts } from './actions/posts.jsx'
import { useDispatch } from "react-redux";

function App() {
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    console.log('currentID');
  }, [dispatch, currentId]); 
  return (
   <>
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in> 
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>              
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
   </>
  )
}

export default App;
