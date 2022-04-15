import {Request, Response} from "express"
import { CreateTaskService } from "../services/CreateTaskService";


class CreateTaskController {
    async handle(request: Request, response: Response){
        const { task } = request.body;
        const { user_id } = request;

        const service = new CreateTaskService();

        try{
            const result = await service.execute(task, user_id)
            return response.json(result);
        } catch (error) {
            return response.json({error: error.message});
        }
        

    }
}

export { CreateTaskController }