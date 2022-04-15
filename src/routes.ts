import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateTaskController } from './controllers/CreateTaskController';
import { DeleteTaskController } from './controllers/DeleteTaskController';
import { ProfileController } from './controllers/ProfileController';
import { ShowTasksController } from './controllers/ShowTasksController';
import { UpdateTaskController } from './controllers/UpdateTaskController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/task", ensureAuthenticated, new CreateTaskController().handle)

router.get("/tasks", ensureAuthenticated, new ShowTasksController().handle);

router.put("/task/:id", ensureAuthenticated, new UpdateTaskController().handle);

router.delete("/task/:id", ensureAuthenticated, new DeleteTaskController().handle);

router.get("/profile", ensureAuthenticated, new ProfileController().handle);

export { router }