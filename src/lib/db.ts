// import { PrismaClient } from "@prisma/client";

// declare global {
//   // eslint-disable-next-line no-var
//   var cachedPrisma: PrismaClient;
// }

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// }

// export const db = prisma;



















import { PrismaClient, User as PrismaUser } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;

export async function insertUser(user: PrismaUser & { given_name: string, family_name: string }): Promise<void> {
  try {
    // Check if a user with the same email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email ?? undefined }, // Handle null case explicitly
    });

    if (existingUser) {
      // If the user already exists, you might want to update their information
      // For now, we'll log a message, but you can customize this behavior
      console.log(`User with email ${user.email} already exists. Updating user information.`);
      
      // Example: Update the existing user's information
      await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          name: `${user.given_name} ${user.family_name}`,
          // Update other fields as needed
        },
      });
    } else {
      // If the user doesn't exist, create a new user
      await prisma.user.create({
        data: {
          id: user.id,
          name: `${user.given_name} ${user.family_name}`,
          email: user.email,
        },
      });

      console.log('User added to the database:', user);
    }
  } catch (error) {
    console.error('Error inserting/updating user into the database:', error);
    throw error; // Optionally rethrow the error for further handling
  }
}
