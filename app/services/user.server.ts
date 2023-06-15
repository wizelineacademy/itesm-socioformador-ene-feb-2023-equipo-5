import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function findOrCreate(create: {
    fullName: string
}) {
    const user = await prisma.user.findFirst({
        where: { fullName: create.fullName }
    })

    if (user === null) {
        const newuser = await prisma.user.create({ data: { id: create.fullName, ...create } })
        return newuser
    } else {
        return user
    }
}