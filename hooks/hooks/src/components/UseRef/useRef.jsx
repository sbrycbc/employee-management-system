import React, { useRef } from 'react';

const MyUseRef = () => {
  const myRef = useRef(null);
  console.log(myRef.current);

  const onButtonClick = () => {
    console.log(myRef.current);
    myRef.current.focus();
  };

  return (
    <>
      <h1>
        
      </h1>
      <div className='myref mt-5'>
        <input ref={myRef} type="text"></input>
        <button onClick={onButtonClick}>Focus Input</button>
      </div>
    </>
  );
};

export default MyUseRef;
