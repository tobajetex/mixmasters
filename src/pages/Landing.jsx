import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const fetchCocktails = async (searchTerm) => {
  if (!searchTerm) return [];
  const { data } = await axios.get(
    `${cocktailSearchUrl}${encodeURIComponent(searchTerm)}`
  );
  return data.drinks ?? [];
};

const Landing = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const { data: drinks } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => fetchCocktails(searchTerm),
    keepPreviousData: true,
  });

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
