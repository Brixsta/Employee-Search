import '../css/Avatar.css';

const Avatar = (props) => {
    let name = props.name.split(' ').join('_');
    return (
        <div 
        style={{backgroundImage: `url("/images/${name}_avatar.jpg")`}}
        className="avatar">
        </div>
    )
}

export default Avatar;