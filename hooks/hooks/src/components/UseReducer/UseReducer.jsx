import React, { useReducer } from 'react';
import "../UseReducer/useReducer.css"


const MyUseReduce = () => {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment':
        return { count: state.count +1 }

      case 'decrement':
        return { count: state.count -1 }  

      default:
        throw new Error();
    }

  }

  const initialState = { count : 0} 
                                    // yapmasini istedgimiz,  baslangic //
  const [state, dispatch] = useReducer(reducer,               initialState)

  return (
    <>
     <div className='myreducer'>
        <h4 className='myreducer_header'>
           useReducer()
        </h4>

        <p className='myreducer_info'>
        useReducer ist ein weiterer Hook in React-Anwendungen, der zur Verwaltung von Zuständen verwendet wird. Er wird oft in komplexeren Zustandsverwaltungsszenarien anstelle von useState bevorzugt. Die useReducer-Funktion akzeptiert einen Zustand und eine Funktion, die zur Aktualisierung dieses Zustands verwendet wird. Dadurch kann der Zustand einer Komponente auf eine vorhersehbare Weise aktualisiert werden.
        </p>

     </div>

    <div className='count mt-5'>
       Count : {state.count}
      <button className='count_button' onClick= {() => dispatch({type: 'increment'})}>+</button>
      <button className='count_button' onClick= {() => dispatch({type: 'decrement'})}>-</button>
    </div>
    </>
  );
};

export default MyUseReduce;
