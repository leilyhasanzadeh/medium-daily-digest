import PropTypes from "prop-types";

function withErrorHandling(Component) {
  function WithErrorHandling({ error, ...props }) {
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return <Component {...props} />;
  }

  WithErrorHandling.propTypes = { error: PropTypes.object };

  return WithErrorHandling;
}

export default withErrorHandling;
