import React, {Component} from 'react'


class Conditional extends Component {
    constructor(props) {
        super(props);
        
        this.UserGreeting = this.UserGreeting.bind(this);
        this.GuestGreeting = this.GuestGreeting.bind(this);

        this.isLoggedIn = false;
    }


    UserGreeting(props) {
        return <h1>Welcome back!</h1>
    };

    GuestGreeting(props) {
        return <h1>Please sign up!</h1>
    };

    render() {
        if (this.isLoggedIn) {
            return <this.UserGreeting />
        }
        return <this.GuestGreeting />
    };
};

export default Conditional;