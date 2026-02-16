"use client"


const FRANCHISE_FILE = process.env.NEXT_PUBLIC_FRANCHISE_FILE_ABSOLUTE_PATH
const MESSAGE_CAPTION = process.env.NEXT_PUBLIC_MESSAGE_CAPTION || "Здравствуйте! Пожалуйста, ознакомьтесь с нашим коммерческим предложением. 😊";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '')
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN
const ID_INSTANCE = process.env.NEXT_PUBLIC_ID_INSTANCE
const API_URL = process.env.NEXT_PUBLIC_API_URL

type SendPartnerDatasArgs = { firstName: string; phone: string, email: string, city: string };

type FranchiseRequestArgs = { firstName: string; phone: string };

export async function sendPartnerDatas({ firstName, phone, email, city }: SendPartnerDatasArgs) {
  const text = `
*🆕 Новая заявка на франшизу!*

👤 *Имя:* ${firstName}
📞 *Телефон:* ${phone}
✉️ *Email:* ${email}
🏙️ *Город:* ${city}

🕒 _Заявка отправлена: ${new Date().toLocaleString("ru-RU")}_

`;
  console.log(API_URL)
  const res = await fetch(`${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN}`, 
    {
    method: "POST",
    body: JSON.stringify({
      chatId: WHATSAPP_NUMBER + "@c.us", 
      message: text,
    }),
  });
  return res
} 

export async function sendFranchiseFileRequest({ firstName, phone }: FranchiseRequestArgs) {
  const res = await fetch(`${API_URL}/waInstance${ID_INSTANCE}/sendFileByUrl/${API_TOKEN}`, {
    method: "POST",
    body: JSON.stringify({
      chatId: phone.replace('+', '') + "@c.us", 
      urlFile: FRANCHISE_FILE,
      fileName: 'franchise.pdf',
      caption: MESSAGE_CAPTION
    }),
  });
  return res
} 