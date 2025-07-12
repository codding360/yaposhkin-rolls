const ACCESS_TOKEN = "d6667351922c97860e3486492d3ff65339f8d9e74d3b0c641f49fc19ac5cb2ff";
const LICENSE_ID = "65174";

const BASE_URL = `https://api.chatapp.online/v1/licenses/${LICENSE_ID}/messengers/grWhatsApp/chats/`;

const headers = {
  "Authorization": ACCESS_TOKEN,
  "Lang": "en",
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export async function sendFranchiseTextRequest({ firstName, email, phone, city }: { firstName: string, email: string, phone: string, city: string }) {
  const url = `${BASE_URL}/messages/text`;
  const body = {
    text: `Новая заявка на франшизу!\nИмя: ${firstName}\nEmail: ${email}\nТелефон: ${phone}\nГород: ${city}`,
    parseMode: "markdown",
    firstName,
    sender: "employee",
    forwarded: 0,
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function sendFranchiseFileRequest({ firstName, email, phone, city }: { firstName: string, email: string, phone: string, city: string }) {
  const url = `${BASE_URL}/messages/file`;
  const body = {
    file: "https://download.samplelib.com/jpeg/sample-green-400x300.jpg",
    fileName: "sample.jpg",
    caption: `Заявка на франшизу от ${firstName} (${city})`,
    parseMode: "markdown",
    firstName,
    sender: "employee",
    forwarded: 0,
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  return res.json();
} 