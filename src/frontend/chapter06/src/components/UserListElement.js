import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';

/**
 * User list element component
 */
class UserListElement extends React.Component {
    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render
     *
     * @returns {XML}
     */
    render() {
        const user = this.props.user;
        const  onIncrement= this.props.onIncrement;
        return (
            <tr >
                <td onClick={onIncrement}>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <Link to={'/user-edit/' + user.id}>
                        <Button >
                            Edit
                        </Button>
                    </Link>
                </td>
            </tr>
        );
    }

}

// make sure we have all the props
UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired
}

// export the connected class
export default connect()(UserListElement);