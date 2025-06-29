import type { ITask } from "@/task.type";
import { createSlice } from "@reduxjs/toolkit";

interface Task {
    tasks : ITask []
}

const initialState : Task  = {
    tasks : [
        {
        id : "1651515156",
        title : "first task",
        description : "this is my first task",
        completed : false,
        createdAt : "2023-10-01T12:00:00Z",
        updatedAt : "2023-10-01T12:00:00Z",
        priority : "high",
        tags : ["work", "urgent"],
        dueDate : "2023-10-15",
        isCompleted : false
    },
        {
        id : "1651515156",
        title : "first task",
        description : "this is my first task",
        completed : false,
        createdAt : "2023-10-01T12:00:00Z",
        updatedAt : "2023-10-01T12:00:00Z",
        priority : "medium",
        tags : ["work", "urgent"],
        dueDate : "2023-10-15",
        isCompleted : false
    }
    ]
}
 
 const taskSlice = createSlice({
    name : "task",
    initialState ,
    reducers : {},
 })

 export default taskSlice.reducer;