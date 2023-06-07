import { authenticator } from "./auth.server";
import { db } from "./db"

export const getHeaderData = async (request:any) => {
    const profile:any = await authenticator.isAuthenticated(request);

    const user:any = await db.user.findUnique({
        where: {
            id: profile.id
        },
        select: {
            name: true
        }
    })
    
    const headerData = {
        name: user.name,
        role: profile._json["https://smartspeak.example.com/roles"].includes("admin") ? "admin" : "user",
        photo: profile.photos[0].value
    }

    return headerData
}