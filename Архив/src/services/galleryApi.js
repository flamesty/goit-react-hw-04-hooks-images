import axios from 'axios';

const MY_KEY = '20832523-2bf34066ca306390d6c2fd3bb';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

const fetchGalleryWithQuery = (searchQuery, numberPage = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${numberPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
    )
    .then(response => response.data.hits);
};

const galleryApi = {
  fetchGalleryWithQuery,
};

export default galleryApi;
