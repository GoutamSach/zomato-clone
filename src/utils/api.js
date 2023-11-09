import axios from "axios";

const BASE_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=food`;

export const dataFromApi = async () => {
  const BASE_URL = `https://pixabay.com/api/?key=40563759-6ad45a794ffbabd8784cdb28f&q=indian-food`;

  const { data } = await axios.get(BASE_URL);
  return data;
};
