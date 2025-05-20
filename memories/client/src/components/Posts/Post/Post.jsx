import React from 'react'
import useStyles from './styles.js';

function Post() {
    const classes = useStyles();
  return (
    <div className={classes.card}>
      post
    </div>
  )
}

export default Post
