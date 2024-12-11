import { useDispatch } from 'react-redux';
import { increaseFont, decreaseFont } from '../redux/fontSlice';

function FontButtons() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => dispatch(increaseFont())}
        className=""
      >
        +
      </button>
      <button
        onClick={() => dispatch(decreaseFont())}
        className=""
      >
        -
      </button>
    </div>
  );
}

export default FontButtons;
