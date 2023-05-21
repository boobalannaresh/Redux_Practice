import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";

// 16
// See the Daigram first you should create & import  " { configureStore } "
// then write below => " reducer " , Now we are not having any slice data.
// So we put in empty => "reducer" 
// Next go to index.js

// export const store = configureStore({
//   reducer: {

//   }
// })


// ------------------------------------------------------------------------------------------------------------------------ //
// 19
// import tasksReducer from "./slices/tasksSlice";
// then reducer inside call the " tasksReducer " ,then set Key-name " tasks "
// That Key-name, you use all components side
// Next go to AddTask.js 

export const store = configureStore({
    reducer:{
  tasks : tasksReducer
    }
})


