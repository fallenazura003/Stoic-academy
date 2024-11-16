const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "IT & Software",
        subCategories: {
          create: [
            { name: "Web Development" },
            { name: "Data Science" },
            { name: "Cybersecurity" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Business",
        subCategories: {
          create: [
            { name: "E-Commerce" },
            { name: "Marketing" },
            { name: "Finance" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Design",
        subCategories: {
          create: [
            { name: "Graphic Design" },
            { name: "3D & Animation" },
            { name: "Interior Design" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Health",
        subCategories: {
          create: [
            { name: "Fitness" },
            { name: "Yoga" },
            { name: "Nutrition" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Artificial Intelligence",
        subCategories: {
          create: [
            { name: "Machine Learning" },
            { name: "Natural Language Processing" },
            { name: "Computer Vision" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Cybersecurity",
        subCategories: {
          create: [
            { name: "Network Security" },
            { name: "Application Security" },
            { name: "Cloud Security" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Human Resources",
        subCategories: {
          create: [
            { name: "Recruitment" },
            { name: "Talent Management" },
            { name: "Employee Relations" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Operations",
        subCategories: {
          create: [
            { name: "Supply Chain Management" },
            { name: "Project Management" },
            { name: "Process Improvement" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Product Design",
        subCategories: {
          create: [
            { name: "UX Design" },
            { name: "UI Design" },
            { name: "Interaction Design" },
            { name: "Others" },
          ],
        },
      },
      {
        name: "Visual Design",
        subCategories: {
          create: [
            { name: "Graphic Design" },
            { name: "Illustration" },
            { name: "Branding" },
            { name: "Others" },
          ],
        },
      },
    ];

    // Sequentially create each category with its subcategories
    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
          subCategories: category.subCategories,
        },
        include: {
          subCategories: true,
        },
      });
    }

    await database.level.createMany({
      data: [
        { name: "Beginner" },
        { name: "Intermediate" },
        { name: "Expert" },
        { name: "All levels" },
      ],
    });

    console.log("Seeding successfully");
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();