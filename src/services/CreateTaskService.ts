import prismaClient from '../prisma'

class CreateTaskService {
   async execute(title: string, user_id: string){
       const task = await prismaClient.task.create({
           data: {
               title,
               user_id
           },
           include: {
               user: true
           }
       })

       return task;
   }
}

export { CreateTaskService }