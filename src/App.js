import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
    const counter = useSelector((state) => state.counter);
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
            <br />
            <button onClick={() => dispatch(signIn())}>
                {isLogged ? 'Logout' : 'Login'}
            </button>

            {isLogged && <h3>You are logged in</h3>}
        </div>
    );
}

export default App;
