import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create a new user
//     const user = await prisma.user.create({
//         data: {
//             name: "Alice",
//             email: "alice@gmail.com",
//         },
// });

//Get all users
// const allUsers = await prisma.user.findMany();

// Create an article and associate it with the user
// const article = await prisma.article.create({
//     data: {
//         title: "Join us for Prisma Day 2021",
//         body: "Johns first article",
//         author: {
//             connect: {
//                 id: 1,
//             },
//         },
//     },
// });

//Get all articles
// const allArticles = await prisma.article.findMany();

//Create a new user with articles
// const user = await prisma.user.create({
//     data: {
//         name: "Bob",
//         email: "bob@gmail.com",
//         articles: {
//             create: {
//                 title: "BOB WINE",
//                 body: "Bob first article",
//             },
//         },
//     },
// });

// Update data
const user = await prisma.user.update({
    where: {
        id: 2,
    },
    data: {
        name: "Sarah Bob",
    },
});
console.log(user);
}

main ()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});