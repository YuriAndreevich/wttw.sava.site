import { useSelector } from 'react-redux';


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

export default Text;
