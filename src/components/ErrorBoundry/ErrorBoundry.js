import { React, Component } from "react";

class ErrorBoundry extends Component {

    constructor(props) {

        super(props);
        this.state = {
            hasError: false,
            errorMessage: null
        }
    }

    componentDidCatch(err, info) {
        let errorMessage = this.props.errorMessage || err;
        this.setState({ hasError: true });
        this.setState({ errorMessage })
    }

    render() {
        if (this.state.hasError === true) {
            return <h1> {this.state.errorMessage} </h1>
        }
        return (this.props.children)
    }
}

export default ErrorBoundry;