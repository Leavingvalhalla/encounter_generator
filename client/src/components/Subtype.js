function Subtype({ onSubtypeChange }) {
  return (
    <div>
      <label htmlFor="subtype">subtype</label>
      <input type="text" name="subtype" onChange={(e) => onSubtypeChange(e)} />
    </div>
  );
}

export default Subtype;
