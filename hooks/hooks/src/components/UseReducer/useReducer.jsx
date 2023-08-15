import React, { useReducer } from 'react';


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
      <h1>
        
      </h1>
      <div className='count mt-5'>
       Count : {state.count}
      <button className='count_button' onClick= {() => dispatch({type: 'increment'})}>+</button>
      <button className='count_button' onClick= {() => dispatch({type: 'decrement'})}>-</button>
      </div>
    </>
  );
};

export default MyUseReduce;