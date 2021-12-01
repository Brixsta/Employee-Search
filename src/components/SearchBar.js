import '../css/SearchBar.css';

const SearchBar = (props) => {
    const { updateFiltered } = props;
    return (
        <div className="search-bar">
            <form onClick={(e)=>{
                e.preventDefault();
            }}>
                <input className={'search-bar-input'}onChange={(evt)=>{
                    updateFiltered(evt.target.value);
                }} type="text"></input>
            </form>
        </div>
    )
}

export default SearchBar;