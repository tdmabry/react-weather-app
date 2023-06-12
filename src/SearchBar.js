const SearchBar = ({ location, onChange, onClick }) => {
    return (
    <div className="search">
    <input 
    initialvalue=""
    value={location}
    onChange={onChange}
    placeholder="Enter Location"
    type="text"/>
    <button onClick={onClick}>Search</button>
    </div>
    );
}
 
export default SearchBar;