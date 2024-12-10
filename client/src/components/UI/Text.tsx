import { useSelector } from 'react-redux';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

function Text({ children, className = '' }: TextProps) {
  const textFontSize = useSelector((state: any) => state.font.textFontSize); 
  const style = {
    fontSize: `${textFontSize}rem`,
    textAlign: 'center',
    fontWeight: '600',
    color: '#38a169',
  };

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
}

export default Text;
