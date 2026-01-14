import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  const [input, setInput] = useState(searchTerm);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(input)}`);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
