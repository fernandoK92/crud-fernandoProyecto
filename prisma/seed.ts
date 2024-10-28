import { PrismaClient } from "@prisma/client";

//initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    //create spells
const post1 = await prisma.spells.create({
    data: {
        name: "fireball",
        type: "Offensive",
        description: "Launches a sphere of fire that explodes on impact, causing damage to multiple enemies in an area.",
        difficultyLevel:"Intermediate",
    },
});

const post2 = await prisma.spells.create({
    data: {
        name: "Stupefy",
        type: "Offensive",
        description: "It is used in magical duels as a non-lethal but effective spell to immobilize the opponent.",
        difficultyLevel:"Intermediate",
    },
});
console.log({post1,post2})   
}

main()
.catch((e) => {
console.error(e);
process.exit(1);
})
.finally(async() =>{
await prisma.$disconnect();
});
    
