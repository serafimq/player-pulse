import React from "react";

export default function MainPage() {
  const [count, setCount] = React.useState(0);

    return (
        <>
        <button onClick={() => setCount(value => value + 1)}>boop</button>
        {count}
        </>
    )
}