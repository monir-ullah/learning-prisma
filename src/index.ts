import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("Hello World");

  //   const result = await prisma.user.create({
  //     data: {
  //       email: "mullah2@gmail.com",
  //       name: "Monir Ullah2",
  //     },
  //   });

  const result = await prisma.user.findMany();

  console.log(result);
};

main();

// title String
//   content String?
//   published Boolean @default(false)
//   author User @relation(fields: [authorId], references: [id])
//   authorId Int
