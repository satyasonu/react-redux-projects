import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import { IncNumber, DecNumber} from './actions/IncDec'
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Increment and Decrement using react redux</h1>
        <div>
          <a onClick={() => dispatch(DecNumber())}><span>-</span></a>
          <input value={myState} />
          <a onClick={() => dispatch(IncNumber())}><span>+</span></a>
        </div>
      </header>
    </div>
  );
}

export default App;
