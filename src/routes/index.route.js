//import express
import express from 'express';
import userRouter from './user.route.js';
import noteRouter from './note.route.js';

//create a route with
const indexRouter = express.Router();
indexRouter.use("/api/v1/users", userRouter);
indexRouter.use("/api/v1/notes", noteRouter);


//export 
export default indexRouter;