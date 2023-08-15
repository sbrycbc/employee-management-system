import React, { useRef } from 'react';
import "../UseRef/useRef.css"

const MyUseRef = () => {
  const myRef = useRef(null);
  console.log(myRef.current);

  const onButtonClick = () => {
    console.log(myRef.current);
    myRef.current.focus();
  };

  
  return (
    <>
    <div>

    <h4 className='myref_header'>
        useRef()
      </h4>

      <p className='myref_info'>
      useRef ist ein Hook in React-Anwendungen, der es Ihnen ermöglicht, Verweise auf DOM-Elemente oder andere Werte zu erstellen. Der useRef-Hook wird innerhalb von React-Komponenten verwendet, um Daten zu speichern oder DOM-Manipulationen durchzuführen. Wenn er jedoch nur zum Speichern von Daten verwendet wird, löst useRef keine erneute Rendervorgänge der Komponente aus.

      </p>
    </div>
     
    <div className='myref mt-5'>
        <input ref={myRef} type="text"></input>
        <button className= 'myref_btn'onClick={onButtonClick}>Focus Input</button>
      </div>
    </>
  );
};

export default MyUseRef;

