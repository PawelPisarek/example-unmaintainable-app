import React from 'react';

import Menu from './Menu';

/**
 * App component
 */
export default class App extends React.Component {
    /**
     * Render
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <div>
                    <Menu/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}