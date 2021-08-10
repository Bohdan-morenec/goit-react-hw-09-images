import axios from "axios";

// const KEY = "21345847-4f426dc72e86c6150c047a55c";
const KEY = "21345832-5dab6ae111cd5d8e046b71308";

export const photoApi = (SearchValue = "", pageNumber = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${SearchValue}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=15`
    )
    .then(({ data }) => data.hits);
};
