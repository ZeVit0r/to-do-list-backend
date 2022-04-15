import prismaClient from '../prisma'

class DeleteTaskService {
   async execute(id: string){
        let task = await prismaClient.task.findUnique({
            where: { id }
        })

        if (!task) {
            throw new Error("Task does not exists!");
        }

        task = await prismaClient.task.delete({
            where: { id }
        })
        
        return task;
       
   }
}

export { DeleteTaskService }