function Environment({ onEnvironmentChange }) {
  return (
    <div>
      <label htmlFor="">Environment</label>
      <input
        type="text"
        name="environment"
        onChange={(e) => onEnvironmentChange(e)}
      />
    </div>
  );
}

export default Environment;
