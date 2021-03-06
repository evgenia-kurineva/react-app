import axios from 'axios';

export const fetchImageAPI = async (file: File): Promise<string> => {
  const url = process.env.REACT_APP_CLOUDINARY_API_ENDPOINT;
  if (!url) {
    // eslint-disable-next-line no-console
    console.error('Error: no url!');
    return '';
  }
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  if (!uploadPreset) {
    // eslint-disable-next-line no-console
    console.error('Error: no upload preset!');
    return '';
  }

  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', uploadPreset);

  const response = await axios.post(url, data);

  return response.data.secure_url;
};
// ///////////////////////////
// ЕXAMPLE response.data ///////////////////
// {asset_id: "9***************12"
// bytes: 5330
// created_at: "2021-07-11T12:35:08Z"
// etag: "2f****************6b"
// format: "jpg"
// height: 150
// original_filename: "userAva"
// placeholder: false
// public_id: "******/m*****6ll"
// resource_type: "image"
// secure_url: "https://res.cloudinary.com/*************************/**************/.jpg"
// signature: "48****4d"
// tags: []
// type: "upload"
// url: "http://res.cloudinary.com/***/***/***/***/***/***/.jpg"
// version: 16****08
// version_id: "5aa1*****ee9b"
// width: 180 ...}

export const fetchTranslateAPI = async (ruWord: string): Promise<string> => {
  const url = process.env.REACT_APP_IBM_CLOUD_URL;
  if (!url) {
    // eslint-disable-next-line no-console
    console.log('Error: No url');
    return '';
  }

  const credentials = `apikey:${process.env.REACT_APP_IBM_CLOUD_API_KEY}`;

  const base64Credentials = btoa(unescape(encodeURIComponent(credentials)));

  const json = JSON.stringify({ text: [ruWord], model_id: 'ru-en' });

  const response = await axios.post(url, json, {
    headers: {
      'Content-type': 'Application/json',
      Authorization: `Basic ${base64Credentials}`,
    },
  });

  return response.data.translations[0].translation;
};
// ///////////////////////////
// ЕXAMPLE response.data ///////////////////
// {translations: [{translation: "Watermelon"}], word_count: 1, character_count: 5}
// character_count: 5
// translations: [{translation: "Watermelon"}]
// 0: {translation: "Watermelon"}
// translation: "Watermelon"
// word_count: 1
