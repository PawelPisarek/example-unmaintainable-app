import React from 'react';
import {connect} from 'react-redux';
import {Table, Pagination} from 'react-bootstrap';
import {push} from 'react-router-redux';

import UserListElement from './UserListElement';

/**
 * User list component
 */
class UserList extends React.Component {
    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.props.dispatch({
            type: 'SHOW_ALL'

        });
    }

    /**
     * Render
     *
     * @returns {XML}
     */
    render() {

        if (this.props.users.length) {

            return (
                <div>
                    <Table bordered hover responsive striped>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Edit</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.props.users.map((user, index) => {

                            return (
                                <UserListElement  onIncrement={() => {
                                    console.log("store.dispatch({type: 'INCREMENT'})",user) }} key={user.id} user={user}/>
                            );

                        })}
                        </tbody>
                    </Table>


                </div>
            );
        }
        else {
            return (<div>loading</div>);
        }
        // render
    }

    /**
     * Change the users lists' current page
     * @param page
     */
}

// export the connected class
function mapStateToProps(state) {
    return ({
        users: state.users.list || []
    });
}
export default connect(mapStateToProps)(UserList);