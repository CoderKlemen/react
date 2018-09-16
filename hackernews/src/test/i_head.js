import React, { Component }  from 'react';

import * as file from './i_file1';

class Log extends Component {

    log = () => {
        console.log(file.second);
    }

    render() {
        return (
            <button onClick={this.log}>Press me!</button>
        );
    }
}

export default Log;