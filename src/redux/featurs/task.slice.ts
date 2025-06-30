
import type { ITask } from "@/task.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Task {
    tasks : ITask []
}

const initialState : Task  = {
    tasks : [
    //     {
    //     id : "1651515156",
    //     title : "first task",
    //     description : "this is my first task",
    //     completed : false,
    //     createdAt : "2023-10-01T12:00:00Z",
    //     updatedAt : "2023-10-01T12:00:00Z",
    //     priority : "high",
    //     tags : ["work", "urgent"],
    //     dueDate : "2023-10-15",
    //     isCompleted : false
    // },
    //     {
    //     id : "1651515156",
    //     title : "first task",
    //     description : "this is my first task",
    //     completed : false,
    //     createdAt : "2023-10-01T12:00:00Z",
    //     updatedAt : "2023-10-01T12:00:00Z",
    //     priority : "medium",
    //     tags : ["work", "urgent"],
    //     dueDate : "2023-10-15",
    //     isCompleted : false
    // }
    ]
}
 
 const taskSlice = createSlice({
    name : "task",
    initialState ,
    reducers : {
        addTask : (state , action : PayloadAction<ITask>) => {

            const id = uuidv4()

            const taskData = {
                ...action.payload,
                id,
                isCompleted: false,
            }
            state.tasks.push(taskData)

        }
    },
 })

 export default taskSlice.reducer;
 export const {addTask} = taskSlice.actions