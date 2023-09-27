export const CALLS_URL = "https://api.skilla.ru/mango/getList";
export const RECORD_URL = "https://api.skilla.ru/mango/getRecord";

export const CALLS_OPTIONS = {
  method: "POST",
  headers: {
    Authorization: `Bearer testtoken`,
    "Content-Type": "application/json",
  },
};

export const RECORD_OPTIONS = {
  method: "POST",
  headers: {
    Authorization: `Bearer testtoken`,
    "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
    "Content-Transfer-Encoding": "binary",
    "Content-Disposition": 'filename="record.mp3"',
  },
};
