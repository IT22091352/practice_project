import React from 'react'

function Bus(props) {

  const {_id, busName, busNumber, busType, busCapacity, busRoute, busDriver, busConductor} = props.bus
  return (
    <div>
        <h1>Bus Display...</h1>
        <br></br><br></br>
        <h1>ID:{_id}</h1>
        <h1>Bus Name:{busName}</h1>
        <h1>Bus Number:{busNumber}</h1>
        <h1>Bus Type:{busType}</h1>
        <h1>Bus Capacity:{busCapacity}</h1>
        <h1>Bus Route:{busRoute}</h1>
        <h1>Bus Driver:{busDriver}</h1>
        <h1>Bus Conductor:{busConductor}</h1>
        <button>Update</button>
        <button>Delete</button>
    </div>
  )
}

export default Bus