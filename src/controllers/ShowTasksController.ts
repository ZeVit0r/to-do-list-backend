import {Request, Response} from "express"
import { ShowTasksService } from "../services/ShowTasksService";


class ShowTasksController {
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const service = new ShowTasksService();

        try{
            const result = await service.execute(user_id)
            return response.json(result);
        } catch (error) {
            return console.log({error: error.message});
        }
        

    }
}

export { ShowTasksController }