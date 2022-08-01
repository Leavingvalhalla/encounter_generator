function Cr({ onCrMinChange, onCrMaxChange }) {
  return (
    <div>
      <p>If you want an exact CR, you can leave maximum blank.</p>
      <label htmlFor="CR minimum">CR min</label>
      <input type="text" onChange={(e) => onCrMinChange(e)} />
      <label htmlFor="CR maximum">CR max</label>
      <input type="text" onChange={(e) => onCrMaxChange(e)} />
    </div>
  );
}

export default Cr;
