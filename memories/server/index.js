import express from 'express';
import bodyParset from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);

app.use(bodyParset.json({ limit:"30mb",extended: true}));
app.use(bodyParset.urlencoded({ limit:"30mb",extended: true}));
app.use(cors());

const  CONNECTION_URL = "mongodb+srv://memories_1:utsav_memories_1@mycluster.sgc6mks.mongodb.net/?retryWrites=true&w=majority&appName=mycluster";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewURLParser : true, useUnifiedTopology: true})
    .then(() => { app.listen(PORT, () => console.log(`server running on port : ${PORT}`))   })
    .catch((err)=>{ console.log(err);
})

// mongoose.set('useFindAndModify', false);