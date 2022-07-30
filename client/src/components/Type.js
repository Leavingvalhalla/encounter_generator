function Type({ onTypeChange }) {
  let typeOptions = {
    0: 'monstrous humanoid',
    1: 'animal',
    2: 'humanoid',
    3: 'dragon',
    4: 'magical beast',
    5: 'Dragon',
    6: 'aberration',
    7: 'plant',
    8: 'undead',
    9: 'Ooze',
    10: 'fey',
    11: 'outsider',
    12: 'Outsider',
    13: 'ooze',
    14: 'construct',
    15: 'vermin',
  };

  return (
    <div>
      <label htmlFor="type">type</label>
      <input type="text" name="type" onChange={(e) => onTypeChange(e)} />
    </div>
  );
}

export default Type;
