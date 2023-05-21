import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AddTask } from './components/AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TasksList } from './components/TasksList';


// 1
// First you have to install => npm install react-bootstrap bootstrap => npm i bootstrap-icons
// Next import the Both package of CSS to => Index.js 
// Then Remove Header Tag Here
// Next go to Navbar.js

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

// --------------------------------------------------------------------------------------------------------- //
// 3
// Just called here <Navbar />
// Next go to AddTask.js

// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------------------------------------------------- //
// 5

// Just called here inside of Container Tag <AddTask/>
// Go to check the result will show 

// function App() {
//   return (
//     <Container>
//      <Navbar/>
//      <AddTask />
//      </Container>
//   );
// }

// export default App;

// -------------------------------------------------------------------------------------------------------------------------- //
// 6
// Go to React-Bootstrap Website then go to Grid Option , after copy below code <Row> and <Col> Tags, then Paste Here
// you have to Customize  => <Col lg="6">
// Next go to AddTask.js

// function App() {
//   return (
//     <Container>
//       <Navbar />
//       <Row className="justify-content-md-center">
//         <Col lg="6">
//           <AddTask />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------------------------ //
// 10
// Just Called here  <TasksList />
// Check the Result, without space showing, 
// Next go to AddTask.js

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
          <TasksList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;