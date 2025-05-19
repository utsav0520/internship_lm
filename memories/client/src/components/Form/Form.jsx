import React, { useState } from 'react'
import useStyles from './styles.js';
import {TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../api/index.js';

function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({creator: '', title: '', message:'',tages:'',selectedfile:''})
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  }
  const clear = () => {}
  return (
    <>
      <Paper className={classes.paper}>
        <Form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onsumbit={handleSubmit}>
          <Typography wariant="h6">Create a Memory</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}  onChange={(e) => setPostData({...postData,creator: e.target.value})} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.creator}  onChange={(e) => setPostData({...postData,title: e.target.value})} />
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.creator}  onChange={(e) => setPostData({...postData,message: e.target.value})} />
          <TextField name="tags" variant="outlined" label="Tages" fullWidth value={postData.creator}  onChange={(e) => setPostData({...postData,tages: e.target.value})} />
          <div className={classes.fileInput}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({base64})=>setPostData({...postData,selectedfile:base64})}
              />
          </div>

          <Button className={classes.buttonSubmit} variant="container" color="primary" size="latge" type='submit' fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Submit</Button>
        </Form>
      </Paper>
    </>
  )
}

export default Form;