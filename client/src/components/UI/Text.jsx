import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Text({ children, className = '' }) {
  const textFontSize = useSelector((state) => state.font.textFontSize); 
  const style = {
    fontSize: `${textFontSize}rem`,
    textAlign: 'center',
    fontWeight: '600',
  };

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,  
  className: PropTypes.string,          
};

export default Text;
