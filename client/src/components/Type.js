import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Type({ onTypeChange }) {
  let typeOptions = [
    { id: 0, name: 'monstrous humanoid' },
    { id: 1, name: 'animal' },
    { id: 2, name: 'humanoid' },
    { id: 3, name: 'dragon' },
    { id: 4, name: 'magical beast' },
    { id: 5, name: 'Dragon' },
    { id: 6, name: 'aberration' },
    { id: 7, name: 'plant' },
    { id: 8, name: 'undead' },
    { id: 9, name: 'Ooze' },
    { id: 10, name: 'fey' },
    { id: 11, name: 'outsider' },
    { id: 12, name: 'Outsider' },
    { id: 13, name: 'ooze' },
    { id: 14, name: 'construct' },
    { id: 15, name: 'vermin' },
  ];

  return (
    <div>
      <label htmlFor="type">type</label>
      <input type="text" name="type" onChange={(e) => onTypeChange(e)} />
    </div>
  );
}

export default Type;
