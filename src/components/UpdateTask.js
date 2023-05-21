import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { updateTaskInList, updateTaskInServer } from "../slices/tasksSlice";

// 13
// Go to React-bootstrap Just copy and paste Modal Tag 
// Next go to TasksList.js

// export function UpdateTask(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// ---------------------------------------------------------------------------------------------------------------------------------- //
// 15
// Just copy the code FormTag only from AddTask.js to Paste here
// Also paste all useState() 
//  Next go to Store.js 


// export function UpdateTask(props) {

//     const [title, setTitle] = useState("");
    
//     const [description, setDescription] = useState("");

//     const updateTask = (e) => {
//         props.onHide()
 
//     }

// return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Update Task
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Task title</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Task Description </Form.Label>
//                     <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </Form.Group>


//             </Form>
//         </Modal.Body>
//         <Modal.Footer>

//         <div className='text-end'>
//                     <Button variant="success" type="submit" onClick={(e) => updateTask(e)}>
//                        UpdateTask
//                     </Button>
//                 </div>
//           <Button onClick={props.onHide}>Close</Button>
          
          
//         </Modal.Footer>
//       </Modal>
//     )
//   }




// ---------------------------------------------------------------------------------------------------------------------------------------//
// 24
// Only showing, which ID you clicked that will appear in text fields side's
// But not work updates , if will edit thw values
//


// export function UpdateTask(props) {

//     const {selectedTask} = useSelector((state) => state.tasks)

//     const [title, setTitle] = useState("");
    
//     const [description, setDescription] = useState("");

//     const [id, setId] = useState(0);

//     const dispatch = useDispatch()

//     const updateTask = (e) => {
//         props.onHide()
//     }

// useEffect(()=> {

//     if(Object.keys(selectedTask).length !== 0){
//         setTitle(selectedTask.title)
//         setDescription( selectedTask.description)
//         setId(selectedTask.id)
//     }

// },[selectedTask]);

//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Update Task
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Task title</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Task Description </Form.Label>
//                     <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </Form.Group>


//             </Form>
//         </Modal.Body>
//         <Modal.Footer>

//         <div className='text-end'>
//                     <Button variant="success" type="submit" onClick={(e) => updateTask(e)}>
//                        UpdateTask
//                     </Button>
//                 </div>
//           <Button onClick={props.onHide}>Close</Button>
          
          
//         </Modal.Footer>
//       </Modal>
//     )
//   }

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// 25
// Now you can Edit the values then Update also happen
// redux state change happen,so you have import dispatch and call inside => reducer " updateTaskInList "
// Next go to TaskList.js components


export function UpdateTask(props) {

  const {selectedTask} = useSelector((state) => state.tasks)

  const [title, setTitle] = useState("");
  
  const [description, setDescription] = useState("");

  const [id, setId] = useState(0);

  const dispatch = useDispatch()

  const updateTask = (e) => {
      props.onHide()
      dispatch(updateTaskInList({id, title, description}))
  }

useEffect(()=> {

  if(Object.keys(selectedTask).length !== 0){
      setTitle(selectedTask.title)
      setDescription( selectedTask.description)
      setId(selectedTask.id)
  }

},[selectedTask]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Task title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Task Description </Form.Label>
                  <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>


          </Form>
      </Modal.Body>
      <Modal.Footer>

      <div className='text-end'>
                  <Button variant="success" type="submit" onClick={(e) => updateTask(e)}>
                     UpdateTask
                  </Button>
              </div>
        <Button onClick={props.onHide}>Close</Button>
        
        
      </Modal.Footer>
    </Modal>
  )
}

// --------------------------------------------------------------------------------------------------------------------------------------------------- //
// 33
// Give inside of  " dispatch(updateTaskInServer({id, title, description})) " <---- this came from tasksSlice.js
// 
// Next go to tasksSlice.js


// export function UpdateTask(props) {

//   const {selectedTask} = useSelector((state) => state.tasks)

//   const [title, setTitle] = useState("");
  
//   const [description, setDescription] = useState("");

//   const [id, setId] = useState(0);

//   const dispatch = useDispatch()

//   const updateTask = (e) => {
//       props.onHide()
//       dispatch(updateTaskInServer({id, title, description}))
//   }

// useEffect(()=> {

//   if(Object.keys(selectedTask).length !== 0){
//       setTitle(selectedTask.title)
//       setDescription( selectedTask.description)
//       setId(selectedTask.id)
//   }

// },[selectedTask]);

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Update Task
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       <Form>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Task title</Form.Label>
//                   <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Task Description </Form.Label>
//                   <Form.Control type="text" placeholder=" Enter Tasks Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//               </Form.Group>


//           </Form>
//       </Modal.Body>
//       <Modal.Footer>

//       <div className='text-end'>
//                   <Button variant="success" type="submit" onClick={(e) => updateTask(e)}>
//                      UpdateTask
//                   </Button>
//               </div>
//         <Button onClick={props.onHide}>Close</Button>
        
        
//       </Modal.Footer>
//     </Modal>
//   )
// }
