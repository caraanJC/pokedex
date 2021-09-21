import { useSelector } from 'react-redux';
import { State } from '../state';

import PokeCard from './PokeCard';

import '../styles/PokeList.css';

const PokeList: React.FC = () => {
  const pokedex = useSelector((state: State) => state.pokedex);
  const selectedType = useSelector((state: State) => state.selectedType);
  const searchWord = useSelector((state: State) => state.searchWord);

  return (
    <ul className='pokeList'>
      {[...pokedex]
        .filter(
          (pokemon) =>
            selectedType === 'All' || pokemon.types.includes(selectedType)
        )
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
        )
        .map((pokemon) => (
          <PokeCard pokemon={pokemon} key={pokemon.ntnlnum} />
        ))}
    </ul>
  );
};

export default PokeList;
