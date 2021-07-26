import PropTypes from 'prop-types'
import props from '../props';

const Header = (props: props) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <p>{props.title}</p>
        </header>
    )
}



Header.protoTypes = {
    title: PropTypes.string
}

export default Header;
