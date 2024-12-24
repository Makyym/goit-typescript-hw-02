type Props = {
    handleClick: () => void;
}

const LoadMoreBtn = ({handleClick}: Props) => {
    return (
        <button onClick={handleClick}>Load more</button>
    )
}

export default LoadMoreBtn