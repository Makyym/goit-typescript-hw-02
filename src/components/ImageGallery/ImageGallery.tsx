import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageData = {
    id: string;
    urls: {
        regular: string;
        small: string;
    };
    description: string | undefined;
};

type Props = {
    data: ImageData[];
    onClick: (url: string) => void;
};

const ImageGallery = ({ data, onClick }:Props ) => {
    return (
        <ul className={s.list}>
            {data.map(({ id, urls, description}) => {
                return <li key={id} onClick={() => onClick(urls.regular)}>
                    <ImageCard data={urls} description={description} />
                </li>
            })}
        </ul>
    )
}

export default ImageGallery