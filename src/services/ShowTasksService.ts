import prismaClient from '../prisma'

class ShowTasksService {
   async execute(user_id: string){
       const tasks = await prismaClient.task.findMany({
           where: { user_id }
       })

       return tasks;
   }
}

export { ShowTasksService }