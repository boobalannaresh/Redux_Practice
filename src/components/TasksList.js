import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { UpdateTask } from './UpdateTask';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask, removeTaskFromList, getTasksFromServer, deleteTaskInServer } from "../slices/tasksSlice";
import { TaskAbortError } from '@reduxjs/toolkit';


// 9
// Go to react-bootstrap , then Click option Table , after Copy the code and Paste here
// Next go to App.js

// export function TasksList() {
//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>Mark</td>
//                         <td>Otto</td>
//                         <td>@mdo</td>
//                     </tr>

//                 </tbody>
//             </Table>
//         </div>
//     )
// }


// ----------------------------------------------------------------------------------------------------------------------------- //
// 12
// Button Tag Paste here
// Next go UpdateTask.js

// export function TasksList() {

//     const updateTask = () =>{
//         console.log("Update Task")
//     }

//     const deleteTask = () =>{
//         console.log("Delete Task")
//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className='text-center'>
//                         <td>1</td>
//                         <td>Mark</td>
//                         <td>Otto</td>
//                         <td >
//                         <Button variant="warning" className='mx-3' onClick={()=> updateTask()}><i className="bi bi-pencil-square"></i></Button>
//                         <Button variant="danger" className='mx-3'><i className="bi bi-trash3" onClick={()=> deleteTask()}></i></Button>
//                         </td>
//                     </tr>

//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// -------------------------------------------------------------------------------------------------------------- //
// 14
// you have to create useState for model box,
// If you will click Edit button, that will show model box
// Next go to UpdateTask.js


// export function TasksList() {

//     const [modalShow, setModalShow] = useState(false);

//     const updateTask = () =>{
//         console.log("Update Task")
//         setModalShow(true);
//     }

//     const deleteTask = () =>{
//         console.log("Delete Task")

//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className='text-center'>
//                         <td>1</td>
//                         <td>Mark</td>
//                         <td>Otto</td>
//                         <td >
//                         <Button variant="warning" className='mx-3' onClick={()=> updateTask()}><i className="bi bi-pencil-square"></i></Button>
//                         <Button variant="danger" className='mx-3'><i className="bi bi-trash3" onClick={()=> deleteTask()}></i></Button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </Table>
//             <UpdateTask
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//         </div>
//     )
// }


// -------------------------------------------------------------------------------------------------------------------------------- //
// 22
// import { useSelector } from "react-redux"; and declare also
// then destructuring happens => {tasksList}
// then will happens maping values
//


// export function TasksList() {

//     const {tasksList} = useSelector((state)=> state.tasks);

//     const dispatch = useDispatch();

//     const [modalShow, setModalShow] = useState(false);

//     const updateTask = () =>{
//         console.log("Update Task")
//         setModalShow(true);

//     }

//     const deleteTask = () =>{
//         console.log("Delete Task")
//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tasksList && tasksList.map((task, index) => {
//                             return(
//                                 <tr className='text-center' key={task.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{task.title}</td>
//                                 <td>{task.description}</td>
//                                 <td>
//                                 <Button variant="warning" className='mx-3' onClick={()=> updateTask()}><i className="bi bi-pencil-square"></i></Button>
//                                 <Button variant="danger" className='mx-3' onClick={()=> deleteTask()}><i className="bi bi-trash3" ></i></Button>
//                                 </td>
//                             </tr>
//                             )
//                         })
//                     }

//                 </tbody>
//             </Table>
//             <UpdateTask
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//         </div>
//     )
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 23
// import 
// Watch in updateTasks functions then Globel state called here " setSelectedTask "
// So first you have to do set the ID in Global State => setSelectedTask
// Then give updateTask inside you have to call to " dispatch(setSelectedTask(task)) "
// you have to go and check inspect redux the slected task works, if you will select which ID data that will show in redux selected tasks side's 
// Next go to UpdateTask.js

// export function TasksList() {

//     const {tasksList} = useSelector((state)=> state.tasks);

//     const dispatch = useDispatch();

//     const [modalShow, setModalShow] = useState(false);

//     const updateTask = (task) =>{
//         console.log("Update Task")
//         setModalShow(true);
//         dispatch(setSelectedTask(task))

//     }

//     const deleteTask = () =>{
//         console.log("Delete Task")

//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tasksList && tasksList.map((task, index) => {
//                             return(
//                                 <tr className='text-center' key={task.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{task.title}</td>
//                                 <td>{task.description}</td>
//                                 <td>
//                                 <Button variant="warning" className='mx-3' onClick={()=> updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
//                                 <Button variant="danger" className='mx-3' onClick={()=> deleteTask()}><i className="bi bi-trash3" ></i></Button>
//                                 </td>
//                             </tr>
//                             )
//                         })
//                     }

//                 </tbody>
//             </Table>
//             <UpdateTask
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//         </div>
//     )
// }

// ---------------------------------------------------------------------------------------------------------------------------------------- //
// 26
// Deleting function happens
// So you have to declare the " dispatch "
// Next go to => server/db.json then create dummy data then go to => tasksSlice.js 


export function TasksList() {

    const {tasksList} = useSelector((state)=> state.tasks);

    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);

    const updateTask = (task) =>{
        console.log("Update Task")
        setModalShow(true);
        dispatch(setSelectedTask(task))

    }

    const deleteTask = (task) =>{
        console.log("Delete Task")
        dispatch(removeTaskFromList(task))
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksList && tasksList.map((task, index) => {
                            return(
                                <tr className='text-center' key={task.id}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>
                                <Button variant="warning" className='mx-3' onClick={()=> updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
                                <Button variant="danger" className='mx-3' onClick={()=> deleteTask(task)}><i className="bi bi-trash3" ></i></Button>
                                </td>
                            </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <UpdateTask
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

// ------------------------------------------------------------------------------------------------------------------------------------ //
// 28
// you have to use " useEffect " then inside call to => dispatch(getTasksFromServer()) <---- this came from tasksSlice.js
// result will show below side, what you have in db.json inside that will show in result
// Next go to Navbar.js


// export function TasksList() {

//     const { tasksList } = useSelector((state) => state.tasks);

//     const dispatch = useDispatch();

//     const [modalShow, setModalShow] = useState(false);

//     const updateTask = (task) => {
//         console.log("Update Task")
//         setModalShow(true);
//         dispatch(setSelectedTask(task))

//     }

//     useEffect(() => {
//         dispatch(getTasksFromServer())
//     }, [dispatch])

//     const deleteTask = (task) => {
//         console.log("Delete Task")
//         dispatch(removeTaskFromList(task))
//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tasksList && tasksList.map((task, index) => {
//                             return (
//                                 <tr className='text-center' key={task.id}>
//                                     <td>{index + 1}</td>
//                                     <td>{task.title}</td>
//                                     <td>{task.description}</td>
//                                     <td>
//                                         <Button variant="warning" className='mx-3' onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
//                                         <Button variant="danger" className='mx-3' onClick={() => deleteTask(task)}><i className="bi bi-trash3" ></i></Button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }

//                 </tbody>
//             </Table>
//             <UpdateTask
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </div>
//     )
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 35
//
//
//


// export function TasksList() {

//     const { tasksList } = useSelector((state) => state.tasks);

//     const dispatch = useDispatch();

//     const [modalShow, setModalShow] = useState(false);

//     const updateTask = (task) => {
//         console.log("Update Task")
//         setModalShow(true);
//         dispatch(setSelectedTask(task))

//     }

//     useEffect(() => {
//         dispatch(getTasksFromServer())
//     }, [dispatch])

//     const deleteTask = (task) => {
//         console.log("Delete Task")
//         dispatch(deleteTaskInServer(task))
//         .unwrap()
//         .then(()=>{
//             dispatch(removeTaskFromList(task))
//         })
       
//     }

//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr className='text-center'>
//                         <th>#</th>
//                         <th>Title</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tasksList && tasksList.map((task, index) => {
//                             return (
//                                 <tr className='text-center' key={task.id}>
//                                     <td>{index + 1}</td>
//                                     <td>{task.title}</td>
//                                     <td>{task.description}</td>
//                                     <td>
//                                         <Button variant="warning" className='mx-3' onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
//                                         <Button variant="danger" className='mx-3' onClick={() => deleteTask(task)}><i className="bi bi-trash3" ></i></Button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }

//                 </tbody>
//             </Table>
//             <UpdateTask
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </div>
//     )
// }
