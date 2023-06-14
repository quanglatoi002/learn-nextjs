import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        //khi inputRef.current thay đổi, component không bị render lại
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};
