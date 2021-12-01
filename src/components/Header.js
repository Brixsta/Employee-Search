import '../css/Header.css';
import EmployeeSearchTitle from './EmployeeSearchTitle';
import SearchBar from './SearchBar';

const Header = (props) => {
    return (
        <header className="header">
        <EmployeeSearchTitle />
          <SearchBar 
            updateFiltered={props.updateFiltered}
          />
        </header>
    );
}

export default Header;