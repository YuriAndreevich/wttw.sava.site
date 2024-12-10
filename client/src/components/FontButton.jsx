import { useDispatch } from 'react-redux';
import { increaseFont, decreaseFont } from '../redux/fontSlice';

function FontButtons() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => dispatch(increaseFont())}k
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decreaseFont())}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
}

export default FontButtons;
