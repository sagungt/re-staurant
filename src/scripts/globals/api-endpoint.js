import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_ENDPOINT}list`,
  DETAIL: (id) => `${CONFIG.API_ENDPOINT}detail/${id}`,
  SEARCH: `${CONFIG.API_ENDPOINT}search`,
  REVIEW: `${CONFIG.API_ENDPOINT}review`,
  IMG_SMALL: (id) => `${CONFIG.BASE_IMG_URL}small/${id}`,
  IMG_MEDIUM: (id) => `${CONFIG.BASE_IMG_URL}medium/${id}`,
  IMG_LARGE: (id) => `${CONFIG.BASE_IMG_URL}large/${id}`,
};

export default API_ENDPOINT;
