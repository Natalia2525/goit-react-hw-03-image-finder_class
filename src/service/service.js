import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
// const API_KEY = '19731613-0dd9928f669764263ad400b12';

// const fetchImages = ({ searchQuery, page }) => {
//   return axios
//     .get(
//       `/?q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`,
//     )
//     .then(({ data }) => data.hits)
// };

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19731613-0dd9928f669764263ad400b12';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get('', {
      params: { searchQuery, page },
    })
    .then(res => res.data.hits);
};
// const fetchImages = async ({ searchQuery, page }) => {
//   try {
//     const { data } = await axios.get('', {
//       params: { searchQuery, page },
//     });
//     return data.hits;
//   } catch (error) {
//     console.log({ error });
//     return [];
//   }
// };

export { fetchImages };
