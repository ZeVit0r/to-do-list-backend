import prismaClient from '../prisma'

class ProfileService {
   async execute(user_id: string){
        let user = await prismaClient.user.findUnique({
            where: { id: user_id}
        })

        if (!user) {
            throw new Error("user does not exists!");
        }
        
        return user;
       
   }
}

export { ProfileService }