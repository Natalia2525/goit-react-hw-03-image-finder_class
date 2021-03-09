import st from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery, onClick }) => {
  return (
    <>
      {gallery.map(img => (
        <li className="ImageGalleryItem" key={img.id} onClick={onClick}>
          <img
            src={img.webformatURL}
            alt=""
            className={st.ImageGalleryItem_image}
            data-image={img.largeImageURL}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
