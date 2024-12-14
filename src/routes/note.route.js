import express from 'express';
import noteController from '../controllers/note.controller.js';


const noteRouter = express.Router();

noteRouter.post("/new", noteController.create);

export default noteRouter;