import '../css/Employee.css';
import Avatar from './Avatar';

const Employee = (props) => {
    // capitalize first letter of firstName and first letter of lastName
    const name = props.name.split(' ').map(i => i[0].toUpperCase()+i.slice(1)).join(' ');
    const { avatar } = props;

    return (
        <li className="employee-list-item"> 
            <Avatar 
                avatar={avatar}
                name={props.name}
            /> 
            {name}
        </li>
    )
}

export default Employee;