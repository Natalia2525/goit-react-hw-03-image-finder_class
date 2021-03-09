import st from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => {
  const scrollFunction = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  return (
    <button onClick={onClick} className={st.Button} type="button">
      Load more
    </button>
  );
};

export default ButtonLoadMore;
