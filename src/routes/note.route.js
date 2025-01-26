import express from 'express';
import noteController from '../controllers/note.controller.js';


const noteRouter = express.Router();

noteRouter.post("/create", noteController.create)
noteRouter.get("/read", noteController.read)
noteRouter.put("/update/:id", noteController.updated)
noteRouter.delete("/delete/:id", noteController.delete)



export default noteRouter;