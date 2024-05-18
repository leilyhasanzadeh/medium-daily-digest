import PropTypes from "prop-types";

function withLoading(Component) {
  function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  }

  WithLoading.propTypes = { isLoading: PropTypes.bool };

  return WithLoading;
}

export default withLoading;
