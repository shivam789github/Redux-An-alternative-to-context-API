import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  
  //allows react components to dispatch action to redux store
  const dispatch=useDispatch()

  //useSelector allows React component to access specific state values needed by component stored in redux store. it will re-render whenever the state changes
  const counter=useSelector(state=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }

  const increaseHandler=()=>{
    dispatch(counterActions.increase(5)) //here 5 that is passed in the acounteractions.increase is the payload
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
