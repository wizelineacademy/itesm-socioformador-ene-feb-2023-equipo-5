const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const test = await prisma.test.create({
        data: {
            videoURL: 'Prueba de subida',
            coherence: 90,
            vocabulary: 80,
            grammar: 70,
            feedaback: 'asdasd',
            recommendation: 'adasd',
            englishlevel: 'A1',
            authorId: 'google-oauth2|116725110233682628133',
            mainSituationId: '7d10df40-099d-44dd-8d3a-065bb17e0ca4'
        }
    })
    console.log(test)
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })