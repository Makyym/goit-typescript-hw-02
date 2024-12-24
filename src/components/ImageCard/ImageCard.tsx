import s from "./ImageCard.module.css"

type Props = {
    data: {small: string};
    description: string | undefined;
}

const ImageCard = ({ data, description }: Props) => {
    const { small } = data;
    return (
        <div className={s.div}>
            <img src={small} alt={description} />
        </div>
    )
}

export default ImageCard