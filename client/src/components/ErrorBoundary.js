import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
      <main className="container error-sec">
        <img src="/img/404.png" alt="error occured" />
        <center><p >!!!!!!!  Do not Refresh page or press Back button While Using Website.  </p></center>
        <a href="/" className="home-btn">BACK TO HOMEPAGE</a>
      </main>
    </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;