import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages, Image } from './gallery-api';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [galleryData, setGalleryData] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalAlt, setModalAlt] = useState<string>("");

  const openModal = (value: string) => {
    setModalAlt(value);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleClick = () => {
    setPage(prev => prev + 1);
  };
  
  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPage(1);
  }

  useEffect(() => {
    if (!searchValue) {
      return;
    };
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchImages(searchValue, page);
        setGalleryData(prev => page === 1 ? results : [...prev, ...results]);
        setTotalPages(total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, searchValue]);

  return (
    <div>
      <ImageModal data={modalAlt} isOpen={modalIsOpen} onRequestClose={closeModal} />
      <SearchBar onSubmit={handleSearch} />
      {galleryData.length > 0 && <ImageGallery data={galleryData} onClick={openModal} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page or change your request!</p>
      )}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn handleClick={handleClick} />}
    </div>
  );
}

export default App;