import {Request, Response} from "express"
import { UpdateTaskService } from "../services/UpdateTasksService";


class UpdateTaskController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new UpdateTaskService();

        try{
            const result = await service.execute(id)
            return response.json(result);
        } catch (error) {
            return response.json({error: error.message});
        }
        

    }
}

export { UpdateTaskController }