import { useState } from 'react';
import st from './Searchbar.module.css';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setsearchQuery] = useState('');

  const handleChange = e => {
    setsearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      toast.error('Введите запрос');
      return;
    }
    onSubmit(searchQuery);
    setsearchQuery('');
  };

  return (
    <header className={st.Searchbar}>
      <form className={st.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={st.SearchForm_button}>
          <span className={st.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={st.SearchForm_input}
          type="text"
          value={searchQuery}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
