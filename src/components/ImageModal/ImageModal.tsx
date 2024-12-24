import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

type Props = {
    data: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

const ImageModal = ({ data, isOpen, onRequestClose }:Props ) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <img src={data}/>
        </Modal>
    )
}

export default ImageModal