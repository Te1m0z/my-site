import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import { faker } from "@faker-js/faker";
//import { createAccessToken } from '@/entities/auth'
import type { Prisma } from "@prisma/client";

// npx prisma migrate dev --name=init

const prisma = new PrismaClient(); // { log: ['query'] }

const userData: Prisma.UserCreateInput = {
  login: "adm",
  password: hashSync("123", 5),
};

const categoryData: Prisma.CategoryCreateInput = {
  name: "React",
};

async function main() {
  //
  const user = await prisma.user.create({ data: userData });
  //
  const category = await prisma.category.create({ data: categoryData });
  //
  const randomPostData = (): Prisma.PostCreateInput => {
    return {
      title: faker.lorem.words({ min: 3, max: 6 }),
      content: faker.lorem.paragraphs(2),
      user: { connect: { id: user.id } },
      category: { connect: { id: category.id } },
    };
  };
  // * how to create array of random data with faker
  //const postsData = faker.helpers.multiple(randomPostData, { count: 5 });
  //
  // * createMany is not supported for SQLite
  // await prisma.post.createMany({
  //   data: postsData,
  // });
  //
  for (let _ of Array(10)) {
    //
    const data = randomPostData();
    //
    await prisma.post.create({ data })
  }
}

main()
  .then(async () => {
    console.log('All seeders completed.');
  })
  .catch(async (e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

