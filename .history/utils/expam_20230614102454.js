import React, { useLayoutEffect, useState, useRef } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count]);

    const handleRun = () => {
        setCount(count + 1);
    };
    return (
        <div ref={containerRef}>
            <p>Container width: {width}px</p>
        </div>
    );
};

export default MyComponent;
