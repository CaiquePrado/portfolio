import axios from "axios";
import { NextResponse } from "next/server";
import * as zod from "zod";

const bodySchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  message: zod.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = bodySchema.parse(body);
    const messageData = {
      embeds: [
        {
          title: "Mensagem de Contato",
          color: 0x4983f5,
          fields: [
            {
              name: "Nome",
              value: name,
              inline: true,
            },
            {
              name: "E-mail",
              value: email,
              inline: true,
            },
            {
              name: "Mensagem",
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);
    return NextResponse.json({
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
