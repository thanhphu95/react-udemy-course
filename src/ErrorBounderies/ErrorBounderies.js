import React, {Component} from 'react';

class ErrorBounderies extends Component 
{
  state = {
    handleError: false,
    errorMessage: '',
  }
  componentDidCatch(error, info) {
    this.setState({handleError: true, errorMessage: error})
  }
  render() {
    return(
      <div>
{this.state.handleError ? this.state.errorMessage : this.props.children}
      </div>
    )
  }
}

export default ErrorBounderies;