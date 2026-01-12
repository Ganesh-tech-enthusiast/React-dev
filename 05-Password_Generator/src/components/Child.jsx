import React, { memo } from 'react'

export default function Child() {

    const Child = memo(({ onClick }) => {
        console.log("Child rendered");
        return <button onClick={onClick}>Click</button>;
    });


}
