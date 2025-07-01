
import type { ITask } from "@/task.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from "../store";

interface Task {
    tasks : ITask [],
    filter : "all"|"low" | "medium" | "high"
}

const initialState : Task  = {
    tasks : [],
    filter : "all"
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

        },

        

        taskIsCompleted : ( state , action : PayloadAction<string>) => {
            console.log("action.payload", action.payload)
            state.tasks.forEach((task) => {
                if(task.id === action.payload){
                    task.isCompleted = !task.isCompleted
                }else{
                    task.isCompleted = false
                }
            })
        },

        taskDelete : (state , action  : PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },

        taskFilter : (state , action : PayloadAction<"all" | "low"| "medium" | "high">) => {
            state.filter = action.payload
        }
    },
 })

 const selectTask = (state : RootState) => {


 const filter = state.todo.filter ;
    if(filter === "low") {
        return state.todo.tasks.filter((task) => task.priority === "low")
    } else if(filter === "medium") {
        return state.todo.tasks.filter((task) => task.priority === "medium")
    } else if(filter === "high") {
        return state.todo.tasks.filter((task) => task.priority === "high")
    }else {
        return state.todo.tasks
    }
 }
 export default taskSlice.reducer;
 export const {addTask , taskIsCompleted, taskDelete, taskFilter } = taskSlice.actions

 export {selectTask}