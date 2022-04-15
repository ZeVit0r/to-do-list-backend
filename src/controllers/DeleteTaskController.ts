import {Request, Response} from "express"
import { DeleteTaskService } from "../services/DeleteTasksService";


class DeleteTaskController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteTaskService();

        try{
            const result = await service.execute(id)
            return response.json(result);
        } catch (error) {
            return response.json({error: error.message});
        }
        

    }
}

export { DeleteTaskController }