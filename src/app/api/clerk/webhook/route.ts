// /api/clerk/webhook

import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  console.log("clerk data", data);
  const emailAddress = data.email_addresses[0].email_address;
  const id = data.id;
  const firstName = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;
  await db.user.create({
    data: {
      id,
      emailAddress,
      firstName,
      lastName,
      imageUrl,
    },
  });
  return new Response(`Webhook received`, { status: 200 });
};
