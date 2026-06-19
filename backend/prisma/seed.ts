import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@buddyreview.com" },
    update: {},
    create: { name: "Buddy Admin", email: "admin@buddyreview.com", passwordHash, role: Role.ADMIN }
  });
  const creator = await prisma.user.upsert({
    where: { email: "creator@buddyreview.com" },
    update: {},
    create: {
      name: "mixjp",
      email: "creator@buddyreview.com",
      passwordHash,
      profile: {
        create: {
          creatorVibe: "Creator Chameleon",
          tier: "Creator",
          xp: 4200,
          platform: "TikTok",
          categories: ["Technology", "ครอบครัว"]
        }
      }
    }
  });

  await prisma.campaign.createMany({
    data: [
      {
        title: "Beauty KOL Jul-Oct 26 [Standard]",
        brief: "TikTok beauty creator campaign for product education and trend content.",
        platform: "TikTok",
        category: "Beauty",
        budget: "15,000-40,000 THB"
      },
      {
        title: "Bank เปิดบัญชีดิจิตอล ลุ้นรับบัตรคอนเสิร์ต",
        brief: "Instagram finance campaign for digital account awareness.",
        platform: "Instagram",
        category: "Finance",
        budget: "20,000-60,000 THB"
      }
    ],
    skipDuplicates: true
  });

  await prisma.blogPost.upsert({
    where: { slug: "creator-vibes-guide" },
    update: {},
    create: {
      title: "Creator Vibes Guide",
      slug: "creator-vibes-guide",
      excerpt: "How creators can position their content for better brand fit.",
      content: "Creator Vibes helps brands understand audience fit, collaboration style, and content strengths.",
      published: true,
      authorId: admin.id
    }
  });

  console.log({ admin: admin.email, creator: creator.email });
}

main()
  .finally(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
