import React, { Component } from 'react'


// most of the time you declare one error boundary and you then use it though your whole app!!
// - it can only catch error that occur in components bellow them in the tree. If and error occurs inside
//   the error boundary it's propagated to the first boundary above it!!!
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false};
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});

        // logErrorToMyService(error, info);
        console.log(`Error: ${error}.`);
        console.log(`Info: ${info}.`);
    }

    // conditional rendering used!!!
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }
        return this.props.children;

    }

}


export default ErrorBoundary