import { useState } from 'react';

function CounterSizeGenerator(props) {

    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        var value = parseInt(event.target.value);
        setSize(value);
        props.updateSize(value);
    }

    return (
        <div>
            <span>Size:</span>
            <input value={size} type={"number"} min={0} onChange={handleChangeSize}/>
        </div>
    );
}

export default CounterSizeGenerator;
