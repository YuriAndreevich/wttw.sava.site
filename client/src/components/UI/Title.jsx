import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Title({ children }) {
  const titleFontSize = useSelector((state) => state.font.titleFontSize); 
  const style = {
    fontSize: `${titleFontSize}rem`,
    textAlign: 'center',
    fontWeight: '600',
  };

  return <h1 style={style}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Title;
