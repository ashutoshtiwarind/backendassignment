import { useSelector } from "react-redux";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import moment from "moment/moment";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Users = () =>{
  const {userData, loading, error, post} = useSelector((state)=> ({
    userData: state.userState.userData, 
    loading: state.userState.loading,
    error: state.userState.error,
    post: state.userState.post,
   }),
   function (prev, curr) {
    if(prev.loading === curr.loading && prev.error === curr.error) {
      return true;
    }
    return false;
   }
   );
   console.log(userData)

  return loading ? (
    <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <CircularProgress thickness = {3.6} size='3rem'/>
    </Box>
  ): error ? (
    <div>Something went Wrong !</div>
  ): (<div>
   <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        post && post.length ? post.map((data) => {
          const usertempdata = userData.find((userData)=> userData.id === data.userId)
          return(
          <>
          <ListItem style={{width: '800px', padding: '3%'}}>
            <ListItemText
              primary="Title:"
              secondary={
                <React.Fragment>
                  <Typography
                    component="div"
                    variant="body2"
                    color="text.primary"
                  >
                   {data.title}
                  </Typography>
                  Body: {data.body}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItemText
            style={{display:'flex', marginLeft: '2%'}}
              primary=""
              secondary={
                <React.Fragment>
                  <Typography
                    component="div"
                    variant="body2"
                    color="text.primary"
                  >
                   Author: {usertempdata ? usertempdata.name :' --'}
                  </Typography>
                </React.Fragment>
              }
            />
          <div style={{display: 'flex', justifyContent:'space-between', width:'500px', padding: '2%'}}>
              <div> Date: {moment().add(Math.floor(Math.random() * 12) + 1, 'days').calendar()}</div>
              <div><button>Mark as read</button></div>
          </div>
         
      <Divider variant="inset" component="li" />
          </>)
       }) : <></>}
    </List>
  </div>
  )
}