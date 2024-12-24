import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const key = "rbC2DUtfmmg8PhOJ55MMlK8zGs8dhxWsEJ9yA3h3nYA";

type ImageUrls = {
    regular: string;
    small: string
};

type Image = {
    id: string;
    description: string | undefined;
    urls: ImageUrls;
};

type FetchImages = {
    results: Image[];
    total: number;
    total_pages: number;
}

export const fetchImages = async (value: string, page: number): Promise<FetchImages> => {
    const response = await axios.get(`?client_id=${key}&query=${value}&page=${page}&per_page=15&orientation=landscape`);
    return response.data;
}