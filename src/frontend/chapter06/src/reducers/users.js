import {reducerCall} from './index';

/**
 * Users reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function users(state = {}, action) {


    console.log(action);
    switch (action.type) {
        case 'SHOW_ALL': {

            console.log(reducerClass.users);
            if (!reducerClass.users) state = [];
            fetch("/api/users").then((response) => (response.json())).then((data) => {
                reducerClass.users = data;
            });
            state = {users: reducerClass.users}

        }
    }


    return reducerCall(state, action, reducerClass);
}


/**
 * Reducer static class
 */
class reducerClass {

    static  users;
}