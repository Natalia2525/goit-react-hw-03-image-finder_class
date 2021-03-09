import st from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={st.ImageGallery}>
      {<ImageGalleryItem gallery={gallery} onClick={onClick} />}
    </ul>
  );
};

export default ImageGallery;
