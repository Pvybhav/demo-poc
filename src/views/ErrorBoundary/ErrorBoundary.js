import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SadPup from '../../assets/sad-pup.png';

class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }
  render() {
    const styles = {
      root: {
        height: '100vh',
        overflow: 'hidden',
      },
      white: {
        color: 'white',
      },
    };

    // next code block goes here
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div style={styles.root}>
          <div style={{ marginTop: '5%' }}>
            <h1>Oops!</h1>
            <h2>Something's Broken, We'll try to fix it asap.</h2>
            <h3>Please try again later.</h3>
            <img
              src={SadPup}
              style={{ paddingTop: '20px' }}
              alt='Something went wrong'
            />
            <Link to='/'>
              <h3 style={{ textDecoration: 'underline' }}>
                Return to Home page
              </h3>
            </Link>
          </div>
          <div className='card-body'>
            <details className='error-details'>
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
