import { useState } from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

function MultiCounter() {

    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size) {
        setSize(size);
    }

    function increase() {
        setSum(sum + 1);
    }

    function decrease() {
        setSum(sum - 1);
    }

    return(
        <div>
            <CounterSizeGenerator updateSize={updateCounterSize}/>
            <CounterGroupSum sum={sum}/>
            <CounterGroup size={size} increase={increase} decrease={decrease}/>
        </div>
    );
}

export default MultiCounter;