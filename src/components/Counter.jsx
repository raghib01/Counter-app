import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);

    }
    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }


  return (
    <div className='h-screen'> 
          <div className="flex flex-col justify-center items-center h-[100%] w-[100%] m-auto ">
              <div className=' bg-slate-700 p-10 text-center'>
                <div className="text-3xl font-bold font-serif text-white">
                    <h1>Count: {counter} </h1>
                </div>
                  <div className=" *:m-3">
                      {
                        counter < 5?
                        <button className='px-4 py-2 bg-rose-700 text-white m-2 rounded-sm' onClick={handleIncrement}>Increment</button> : <button  className='bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" disabled'> Increment </button>
                      }
                      {
                        counter > -5?
                        <button className='px-4 py-2 bg-rose-700 text-white m-2 rounded-sm' onClick={handleDecrement}>Decrement</button> : <button  className='bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50" disabled'> Decrement</button>
                      }
                    <button className='px-4 py-2 bg-rose-700 text-white m-2 rounded-sm' onClick={resetCounter}>Reset</button>
                </div>
              </div>
              
          </div>
          
    </div>
)
}

export default Counter