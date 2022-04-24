import React, { useState } from 'react'

export default function Table() {

  const [process, setProcess] = useState([{
    a_time: null,
    b_time: null
  }])

  function handlechangea(e) {
    setProcess((currentprocess) => currentprocess.map(p => p.index !== process.index ? {
      ...p,
      a_time: e.target.value
    } : p))
  }
  function handlechangeb(e) {
    setProcess((currentprocess) => currentprocess.map(p => p.index !== process.index ? {
      ...p,
      b_time: e.target.value
    } : p))
  }
  function handleClick() {
    setProcess(currentprocess => [...currentprocess, {
      a_time: null,
      b_time: null
    }])
  }
  var submit = false;
  function handlesubmit() {
    submit = true;
    console.log('a_time : %d',process.a_time[0]);
  }
  return (
    <>
      <div className='container'>
        <p>Enter the arival time burst time respectively</p>
        {process.map((process, index) => {
          return (
            <div key={index}>
              <input
                type="number"
                value={process.a_time}
                onChange={handlechangea}
              />
              <input
                type="number"
                value={process.b_time}
                onChange={handlechangeb}
              />
            </div>
          )
        })

        }
        <div>
          <button onClick={handleClick}>
            Add
          </button>
          <button onClick={handlesubmit}>
            Submit
          </button>
        </div>
        
      </div>
    </>
  )
}
