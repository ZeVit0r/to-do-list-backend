import {Request, Response} from "express"
import { ProfileService } from "../services/ProfileService";


class ProfileController {
    async handle(request: Request, response: Response){
        const { user_id } = request

        const service = new ProfileService();

        try{
            const result = await service.execute(user_id)
            return response.json(result);
        } catch (error) {
            return response.json({error: error.message});
        }
        

    }
}

export { ProfileController }