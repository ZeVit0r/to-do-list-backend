import prismaClient from '../prisma'

class UpdateTaskService {
   async execute(id: string){
        let task = await prismaClient.task.findUnique({
            where: { id }
        })
       
        if (!task) {
            throw new Error("Task does not exists!");
        }

        task = await prismaClient.task.update({
            where: { id },
            data: {
                completed: !task.completed
            }
        })

       return task;
   }
}

export { UpdateTaskService }