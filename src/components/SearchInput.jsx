function SearchInput({ value, handlerInput }) {
    return (
      <>
        <input
          className="input-search"
          type="text"
          value={value}
          onChange={(e) => handlerInput(e)}
        />
      </>
    );
  }
  
  export default SearchInput;
  // App.js => props => SearchInput.jsx ... SearchInput.jsx => e => (e) =>
  