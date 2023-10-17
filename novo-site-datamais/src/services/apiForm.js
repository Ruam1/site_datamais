import axios from "axios";

const apiFormClient = axios.create({
  baseURL: 'https://datamais.com.br/datamais-api/mail/sendmail.php',
  headers: {
      'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    APIAuthorization: 'ZGF0YW1haXMtc2lzdGVtYXNAMjAyMg==',
  },
  });
  
  export default apiFormClient;