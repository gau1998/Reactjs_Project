
const API_VERSION = '/api/v1';


var BASE_URL = 'http://dev.perspectico.com/';
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://dev.perspectico.com/';
} else {
  BASE_URL = process.env.REACT_APP_BASE_URL || 'https://cp.perspectico.com';
}

const getHeaders = () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };
  // const authToken = storageService.getAuthToken();
  // if (authToken) {
  //   headers.authorization = `Bearer ${authToken}`;
  // }
  console.log(process.env)
  const authToken = process.env.REACT_APP_TOKEN;
  headers.authorization = `Bearer ${authToken}`;
  return headers;
};

export const loginRequestApi = async (data) => {
  try {
    const response = await fetch(BASE_URL + `${API_VERSION}/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getCourseDetailsApi = async (data) => {
  const {perspecticoCourseId} = data
  try {
    const response = await fetch(BASE_URL + `${API_VERSION}/getPerspecticoCourseDetail?perspecticoCourseId=${perspecticoCourseId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getTutorialDetailsApi = async (data) => {
  const {tutorialId} = data
  try {
    const response = await fetch(BASE_URL + `${API_VERSION}/getTutorialById?tutorialId=${tutorialId}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getSourcesApi = async ({payload}) => {
  try {
    const response = await fetch(BASE_URL + `${API_VERSION}/getLecture?${payload}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};



