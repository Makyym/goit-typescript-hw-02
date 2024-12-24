import { RotatingLines } from "react-loader-spinner"

const Loader = () => {
    return (
        <div>
            <RotatingLines
                visible={true}
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    )
}

export default Loader