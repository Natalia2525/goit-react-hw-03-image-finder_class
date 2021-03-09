import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import { fetchImages } from './service/service';
import ImageGallery from './Components/ImageGallery';
import Spinner from './Components/Spinner';
import ButtonLoadMore from './Components/Button/Button';
import ModalImage from './Components/Modal';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState('');
  const [largeImage, setLargetImages] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);

    return fetchImages({ page, searchQuery })
      .then(hits => setImages([...images, ...hits]))
      .then(() => scrollTo())
      .catch(error => toast.error('Error'))
      .finally(() => setIsLoading(false));
  }, [page, searchQuery]);

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  const handleSubmit = searchQuery => {
    setsearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleClickNextPage = () => {
    setPage(page + 1);
  };

  //Modal
  const handleClickImg = e => {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
      setLargetImages(e.target.dataset.image);
    }
  };

  const toggleModal = () => {
    setLargetImages('');
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery gallery={images} onClick={handleClickImg} />
      {isLoading && <Spinner />}
      {images.length > 0 && <ButtonLoadMore onClick={handleClickNextPage} />}

      {largeImage && (
        <ModalImage onClose={toggleModal}>
          <img src={largeImage} alt="modal" />
        </ModalImage>
      )}
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
