import createNote from "./Note/create.js";
import { deleted } from "./Note/delete.js";
import { Read } from "./Note/read.js";
import updateNote from "./Note/update.js";
const noteController = {
    create: createNote,
    read: Read,
    updated: updateNote,
    delete: deleted

};

export default noteController;