"use server"

type ChatAppTokenState = {
  accessToken: string | null;
  accessTokenEndTime: number | null;
  intervalStarted: boolean;
};

const NEXT_SERVER_CHATAPP_EMAIL = process.env.NEXT_SERVER_CHATAPP_EMAIL;
const NEXT_SERVER_CHATAPP_PASSWORD = process.env.NEXT_SERVER_CHATAPP_PASSWORD;
const NEXT_SERVER_CHATAPP_ID = process.env.NEXT_SERVER_CHATAPP_ID;
const NEXT_PUBLIC_WHATSAPP_LICENSE_ID = process.env.NEXT_PUBLIC_WHATSAPP_LICENSE_ID;

const FRANCHISE_FILE = process.env.NEXT_PUBLIC_FRANCHISE_FILE_ABSOLUTE_PATH
const MESSAGE_CAPTION = process.env.NEXT_PUBLIC_MESSAGE_CAPTION || "Здравствуйте! Пожалуйста, ознакомьтесь с нашим коммерческим предложением. 😊";

const BASE_URL = `https://api.chatapp.online/v1/licenses/${NEXT_PUBLIC_WHATSAPP_LICENSE_ID}/messengers/grWhatsApp/chats`;

// Глобальные переменные для токена и интервала
if (!(globalThis as any)._chatappTokenState) {
  (globalThis as any)._chatappTokenState = {
    accessToken: null,
    accessTokenEndTime: null,
    intervalStarted: false,
  } as ChatAppTokenState;
}
const tokenState = (globalThis as any)._chatappTokenState as ChatAppTokenState;

async function getAccessToken() {
  const res = await fetch("https://api.chatapp.online/v1/tokens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lang": "en",
    },
    body: JSON.stringify({
      email: NEXT_SERVER_CHATAPP_EMAIL,
      password: NEXT_SERVER_CHATAPP_PASSWORD,
      appId: NEXT_SERVER_CHATAPP_ID,
    }),
  });
  const data = await res.json();
  if (data.success && data.data?.accessToken) {
    tokenState.accessToken = data.data.accessToken;
    tokenState.accessTokenEndTime = data.data.accessTokenEndTime;
    return tokenState.accessToken;
  } else {
    throw new Error("Failed to get access token from ChatApp API");
  }
}

// Запускать setInterval только один раз
if (!tokenState.intervalStarted) {
  tokenState.intervalStarted = true;
  // Сразу получить токен
  getAccessToken();
  // Обновлять раз в 23ч 55м
  setInterval(getAccessToken, 23 * 60 * 60 * 1000 + 55 * 60 * 1000);
}

function getAuthHeaders() {
  return {
    "Authorization": tokenState.accessToken || "",
    "Lang": "en",
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
}

type FranchiseRequestArgs = { firstName: string; email: string; phone: string; city: string };

export async function sendFranchiseFileRequest({ firstName, email, phone, city }: FranchiseRequestArgs) {
  // Если токен истёк — обновить
  if (!tokenState.accessToken || (tokenState.accessTokenEndTime && Date.now() / 1000 > tokenState.accessTokenEndTime - 60)) {
    await getAccessToken();
  }
  const url = `${BASE_URL}/${phone}/messages/file`;
  const body = {
    file: FRANCHISE_FILE,
    fileName: "franchise.pdf",
    caption: MESSAGE_CAPTION,
    parseMode: "markdown",
    firstName,
    sender: "employee",
    forwarded: 0,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });
  return res.json();
} 