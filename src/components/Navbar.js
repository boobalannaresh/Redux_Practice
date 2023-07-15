import React from 'react';
import { useSelector } from "react-redux";



// 2
// Just Create Text
// Next go to App.js

// export  function Navbar() {

//   return (
//     <div>
//         <h1 className='text-center my-4 text-primary'> Project Management</h1>
//         <p className='text-center lead'>Currently 0 task(s) pending</p>
//     </div>
//   )
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------- //
// 21
// you have to import { useSelector } from "react-redux";
// useSelector is only reading process to related in Global state side
// if you will add new data's, that will appear and show in Navbar side  
// Next go TasksList.js

export  function Navbar() {

  const {tasksList} = useSelector((state)=> state.tasks);

return (
  <div>
      <h1 className='text-center my-4 text-primary'> Project Management</h1>
      <p className='text-center lead'>{`Currently ${tasksList.length} task(s) pending List`}</p>
  </div>
)
}

// --------------------------------------------------------------------------------------------------------------------------------- //
// 29
// if URL call any mistake , Error will show => came from tasksSlice.js 
// Next go to tasksSlice.js


// export  function Navbar() {

//     const {tasksList, error} = useSelector((state)=> state.tasks);

//   return (
//     <div>
//         <h1 className='text-center my-4 text-primary'> Project Management</h1>
//         <p className='text-center lead'>{`Currently ${tasksList.length} task(s) pending`}</p>
//         {
//            ( error !== "") ? <h5 className='text-center text-danger'>{error}</h5> : null
//         }
//     </div>
//   )
// }
