import PropTypes from "prop-types";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

List.propTypes = { data: PropTypes.List };

export default List;
