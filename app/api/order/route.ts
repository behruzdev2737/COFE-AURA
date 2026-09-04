import { NextResponse } from "next/server";

const BOT_TOKEN = "8887750641:AAGFsDloUwmsISmKKEhbRRktnMjTNPRjG-c";

export async function POST(req: Request) {
  try {
    const { chatId, orderDetails, totalAmount } = await req.json();

    if (!chatId) {
      return NextResponse.json({ error: "chatId required" }, { status: 400 });
    }

    const message = `
<tg-emoji emoji-id="5462919317832082236">✅</tg-emoji> <b>Buyurtmangiz muvaffaqiyatli qabul qilindi!</b>

<tg-emoji emoji-id="5436145964882606058">🛒</tg-emoji> <b>Sizning xaridlaringiz:</b>
${orderDetails}

<tg-emoji emoji-id="5350324151712230363">💵</tg-emoji> <b>Jami summa:</b> ${totalAmount}

<i>Tez orada buyurtmangiz tayyor bo'ladi!</i>
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}
