import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskToList, addTaskToServer } from '../slices/tasksSlice';
import { useDispatch } from "react-redux";


// 4
// Just copy the code from Bootstrap FORM components to Paste here, then Remove some content 
// Next go to App.js  

// export function AddTask() {
//   return (
//     <div>

// <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Task title</Form.Label>
//         <Form.Control type="text" placeholder="Enter Task Title" />

//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Task Description </Form.Label>
//         <Form.Control type="text" placeholder=" Enter Tasks Description" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>

//     </div>
//   )
// }

// --------------------------------------------------------------------------------------------------------------------- //
// 7
// Create Div Tag for Button Tag Purpose

// export function AddTask() {
//     return (
//       <div>

//   <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Task title</Form.Label>
//           <Form.Control type="text" placeholder="Enter Task Title" />

//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Task Description </Form.Label>
//           <Form.Control type="text" placeholder=" Enter Tasks Description" />
//         </Form.Group>

//        <div className='text-end'>
//        <Button variant="primary" type="submit">
//          Add Task
//         </Button>
//        </div>

//       </Form>

//       </div>
//     )
//   }

// ------------------------------------------------------------------------------------------------------------------ //
// 8
// Create 2 useState() then 1 onClick function.
// If you will fill TextField => go to Check the Console 
// Next go TasksList.js

// export function AddTask() {

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     const addTask = (e) => {
//       e.preventDefault()
//       console.log({title, description})
//     }

//     return (
//         <div>

//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Task title</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Task Description </Form.Label>
//                     <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </Form.Group>

//                 <div className='text-end'>
//                     <Button variant="primary" type="submit" onClick={(e)=> addTask(e)}>
//                         Add Task
//                     </Button>
//                 </div>

//             </Form>

//         </div>
//     )
// }

// ----------------------------------------------------------------------------------------------------------------------- //
// 11
// Create section Tags then give margin
// Next go TasksList.js



// export function AddTask() {

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     const addTask = (e) => {
//       e.preventDefault()
//       console.log({title, description})
//     }

//     return (
//         <section className="my-5">

//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Task title</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Task Description </Form.Label>
//                     <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </Form.Group>

//                 <div className='text-end'>
//                     <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
//                         Add Task
//                     </Button>
//                 </div>

//             </Form>

//         </section>
//     )
// }



// --------------------------------------------------------------------------------------------------------------------------------------- //
// 20
// import useDispatch, declare that dispatch and inside you have to call " addTaskToList " 
// Next go to Navbar.js 

export function AddTask() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = (e) => {
        e.preventDefault()
        console.log({ title, description })
        dispatch(addTaskToList({ title, description }))
        setTitle("")
        setDescription("")
    }

    return (
        <section className="my-5">

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Task Description </Form.Label>
                    <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <div className='text-end'>
                    <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
                        Add Task
                    </Button>
                </div>

            </Form>

        </section>
    )
}

// ------------------------------------------------------------------------------------------------------------------ //
// 31
// you have call inside " dispatch(addTaskToServer({ title, description })) " <--- this came from tasksSlice.js
// 
// Next go to tasksSlice.js


// export function AddTask() {

//     const dispatch = useDispatch();

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     const addTask = (e) => {
//         e.preventDefault()
//         console.log({ title, description })
//         dispatch(addTaskToServer({ title, description }))
//         setTitle("")
//         setDescription("")
//     }

//     return (
//         <section className="my-5">

//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Task title</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Task Description </Form.Label>
//                     <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </Form.Group>

//                 <div className='text-end'>
//                     <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
//                         Add Task
//                     </Button>
//                 </div>

//             </Form>

//         </section>
//     )
// }

