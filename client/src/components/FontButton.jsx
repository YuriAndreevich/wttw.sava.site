import { useDispatch } from 'react-redux';
import { increaseFont, decreaseFont } from '../redux/fontSlice';
import { Button } from '@mui/material';

function FontButtons() {
  const dispatch = useDispatch();

  return (
    <div >
      <Button
      style={{margin:'10px'}}
      variant="contained"
        onClick={() => dispatch(increaseFont())}
        className=""
      >
        + А
      </Button>
      <Button variant="contained"
        onClick={() => dispatch(decreaseFont())}
        className=""
      >
        - а
      </Button>
    </div>
  );
}

export default FontButtons;
