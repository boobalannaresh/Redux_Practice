import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// 18
// Import { createSlice } from "@reduxjs/toolkit" and
// write the code Diagram wise ( i ) name: ( ii ) initialState: ( iii ) reducers:
// write the code 4 reducers action => addTaskToList,  removeTaskFromList,  updateTaskInList, setSelectedTask.
// Next go to Store.js


const initialState = {
    tasksList:[],
    selectedTask:{},
}

const tasksSlice = createSlice({
name:"tasksSlice",
initialState: initialState,
reducers:{
    addTaskToList:(state, action) =>{
         const id = Math.random() * 100
         let task = { ...action.payload, id}
         state.tasksList.push(task)
    },
    removeTaskFromList:(state, action) => {
        state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
    },
    updateTaskInList:(state, action ) => { 
        state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
    },
    setSelectedTask: (state, action) => {
        state.selectedTask = action.payload
    }
}
})

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// 27
// go to npm package " npm i json-server", then set up and create folder "server" >> "db.json" then write the code dummy data's
// Definitly you have to run server , so write the code in "Terminal" side =>{" npx json/server --watch server/db.json --port 400 "}
// go to postman software then give => "http://localhost:4000/tasks", if you click send button => db.json data's will show in postman terminal side
// import here " createAsyncThunk " 
// you have to give " isLoading " give to inside of " initialState " for If you will " Create or send " request response check process  
// then ----> error: ""  <---- this is for using check the ERROR purpose.
// then create new Varible's " getTasksFromServer " <---- This is callback API using for passing 2 value's => " ( _ , {rejectWithValue}) " first value is( args ), second value is ( ThunkAPI ) < --- This is Error Purpose
// Then create " extraReducers " for handle " Life cycle of async operations " ---> Pending, Fulfilled, rejected.
// Next go to TasksList.js 


// const initialState = {
//     tasksList: [],
//     selectedTask: {},
//     isLoading: false,
//     error: ""
// }

// //// --> GET

// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_, { rejectWithValue }) => {
//         const response = await fetch("http://localhost:4000/tasks")
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "No Tasks Found 🙄" })
//         }
//     }
// )

// const tasksSlice = createSlice({
//     name: "tasksSlice",
//     initialState: initialState,
//     reducers: {
//         addTaskToList: (state, action) => {
//             const id = Math.random() * 100
//             let task = { ...action.payload, id }
//             state.tasksList.push(task)
//         },
//         removeTaskFromList: (state, action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList: (state, action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask: (state, action) => {
//             state.selectedTask = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getTasksFromServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//     }
// })

// export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

// export default tasksSlice.reducer

// ---------------------------------------------------------------------------------------------------------------------------------- //
// 30
// seprate give BAES_URL = "http://localhost:4000/tasks";
// then create new varible " addTaskToServer " => POST method 
// then wrote the code " addCase " also
// Next go to AddTask.js



// const initialState = {
//     tasksList: [],
//     selectedTask: {},
//     isLoading: false,
//     error: ""
// }

// const BAES_URL = "http://localhost:4000/tasks";

// //// --> GET

// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_, { rejectWithValue }) => {
//         const response = await fetch(BAES_URL)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "No Tasks Found" })
//         }
//     }
// )

// //// --> POST

// export const addTaskToServer = createAsyncThunk(
//     "tasks/addTaskToServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "POST",
//             body: JSON.stringify(task),
//             headers:{"Content-type" : "application/json; charset=UTF-8"}
//         }
//         const response = await fetch(BAES_URL,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "Task Not Add ☹ " })
//         }
//     }
// )
// const tasksSlice = createSlice({
//     name: "tasksSlice",
//     initialState: initialState,
//     reducers: {
//         addTaskToList: (state, action) => {
//             const id = Math.random() * 100
//             let task = { ...action.payload, id }
//             state.tasksList.push(task)
//         },
//         removeTaskFromList: (state, action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList: (state, action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask: (state, action) => {
//             state.selectedTask = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getTasksFromServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//             .addCase(addTaskToServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(addTaskToServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList.push(action.payload)
//             })
//             .addCase(addTaskToServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
               
//             })
//     }
// })

// export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

// export default tasksSlice.reducer

// ----------------------------------------------------------------------------------------------------------------------------------------------- //
// 32
// Create new varible's " updateTaskInServer " then addCase also created
// update instead of call " PATCH "
// Next go to UpdateTask.js


// const initialState = {
//     tasksList: [],
//     selectedTask: {},
//     isLoading: false,
//     error: ""
// }

// const BAES_URL = "http://localhost:4000/tasks";

// //// --> GET

// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_, { rejectWithValue }) => {
//         const response = await fetch(BAES_URL)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "I can't found any data 😥🍳" })
//         }
//     }
// )

// //// --> POST

// export const addTaskToServer = createAsyncThunk(
//     "tasks/addTaskToServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "POST",
//             body: JSON.stringify(task),
//             headers:{"Content-type" : "application/json; charset=UTF-8"}
//         }
//         const response = await fetch(BAES_URL,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "Task has not added yet ☹ " })
//         }
//     }
// )

// ///// ---> PATCH

// export const updateTaskInServer = createAsyncThunk(
//     "tasks/ updateTaskInServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "PATCH",
//             body: JSON.stringify(task),
//             headers:{"Content-type" : "application/json; charset=UTF-8"}
//         }
//         const response = await fetch(BAES_URL + "/" + task.id,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "Task has not updated yet ☹ " })
//         }
//     }
// )


// const tasksSlice = createSlice({
//     name: "tasksSlice",
//     initialState: initialState,
//     reducers: {
//         addTaskToList: (state, action) => {
//             const id = Math.random() * 100
//             let task = { ...action.payload, id }
//             state.tasksList.push(task)
//         },
//         removeTaskFromList: (state, action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList: (state, action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask: (state, action) => {
//             state.selectedTask = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getTasksFromServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//             .addCase(addTaskToServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(addTaskToServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList.push(action.payload)
//             })
//             .addCase(addTaskToServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//             .addCase(updateTaskInServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(updateTaskInServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//             })
//             .addCase(updateTaskInServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//     }
// })

// export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

// export default tasksSlice.reducer

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// 34
// Delete method created done => deleteTaskInServer() , then addCase also created done 
//
// Next go to TasksList.js


// const initialState = {
//     tasksList: [],
//     selectedTask: {},
//     isLoading: false,
//     error: ""
// }

// const BAES_URL = "http://localhost:4000/tasks";

// //// --> GET

// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_, { rejectWithValue }) => {
//         const response = await fetch(BAES_URL)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "I can't found any data 😥🍳" })
//         }
//     }
// )

// //// --> POST

// export const addTaskToServer = createAsyncThunk(
//     "tasks/addTaskToServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "POST",
//             body: JSON.stringify(task),
//             headers:{"Content-type" : "application/json; charset=UTF-8"}
//         }
//         const response = await fetch(BAES_URL,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "Task has not added yet ☹ " })
//         }
//     }
// )

// ///// ---> PATCH

// export const updateTaskInServer = createAsyncThunk(
//     "tasks/ updateTaskInServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "PATCH",
//             body: JSON.stringify(task),
//             headers:{"Content-type" : "application/json; charset=UTF-8"}
//         }
//         const response = await fetch(BAES_URL + "/" + task.id,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "Task has not updated yet ☹ " })
//         }
//     }
// )


// //// ---> DELETE

// export const deleteTaskInServer = createAsyncThunk(
//     "tasks/ deleteTaskInServer",
//     async (task, { rejectWithValue }) => {
//         const options = {
//             method: "DELETE"
//         }
//         const response = await fetch(BAES_URL + "/" + task.id, options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({ error: "🗑 Task has not deleted yet ☹ " })
//         }
//     }
// )

// const tasksSlice = createSlice({
//     name: "tasksSlice",
//     initialState: initialState,
//     reducers: {
//         addTaskToList: (state, action) => {
//             const id = Math.random() * 100
//             let task = { ...action.payload, id }
//             state.tasksList.push(task)
//         },
//         removeTaskFromList: (state, action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList: (state, action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask: (state, action) => {
//             state.selectedTask = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getTasksFromServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//             .addCase(addTaskToServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(addTaskToServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList.push(action.payload)
//             })
//             .addCase(addTaskToServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//             .addCase(updateTaskInServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(updateTaskInServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//                 state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//             })
//             .addCase(updateTaskInServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//             .addCase(deleteTaskInServer.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(deleteTaskInServer.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.error = ""
//             })
//             .addCase(deleteTaskInServer.rejected, (state, action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//     }
// })

// export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

// export default tasksSlice.reducer