function Type({ onTypeChange }) {
  return (
    <div>
      <label htmlFor="type">type</label>
      <input type="text" name="type" onChange={(e) => onTypeChange(e)} />
    </div>
  );
}

export default Type;
