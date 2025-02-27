
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import  Tasks  from "../model/Task";

export const initialState: Tasks[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addTask = createAsyncThunk(
  "Task/addTask",
  async (Task: Tasks) => {
    try {
      const response = await api.post("/Task/add", Task);
      alert("Task Added Successfully");
      return response.data.message;
    } catch (error) {
      alert("Failed to add Task");
      console.log("error", error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "Task/deleteTask",
  async (id: string) => {
    try {
      const response = await api.delete(`/Task/delete/${id}`);
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "Task/updateTask",
  async (Task: Tasks) => {
    try {
      const response = await api.put(`/Task/update/${Task.id}`);
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

export const getTask = createAsyncThunk("Task/getTask", async () => {
  try {
    const response = await api.get("/Task/get");
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
});

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    saveTasks: (state, action: PayloadAction<Tasks>) => {
      state.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      state = state.filter((Task) => Task.id !== action.payload);
    },
    updateTasks: (state, action: PayloadAction<Tasks>) => {
      const index = state.findIndex(
        (Task) => Task.id === action.payload.id
      );
      if (index > -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {

    // Add Task
    builder
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        console.log("Failed to add Task", action.payload);
      })
      .addCase(addTask.pending, (state, action) => {
        console.log("Adding Task", action.payload);
      });

      // Delete Task
    builder
      .addCase(deleteTask.fulfilled, (state, action) => {
        state = state.filter((Task) => Task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        console.log("Failed to delete Task", action.payload);
      })
      .addCase(deleteTask.pending, (state, action) => {
        console.log("Deleting Task", action.payload);
      });

      // Update Task
    builder
      .addCase(updateTask.fulfilled, (state, action) => {
        state.map((Task) => {
          if (Task.id === action.payload.id) {
            Task.task = action.payload.task;
          }
        });
      })
      .addCase(updateTask.rejected, (state, action) => {
        console.log("Failed to update Task", action.payload);
      })
      .addCase(updateTask.pending, (state, action) => {
        console.log("Updating Task", action.payload);
      });

      // Get Task
    builder
      .addCase(getTask.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        console.log("Failed to get Task", action.payload);
      })
      .addCase(getTask.pending, (state, action) => {
        console.log("Getting Task", action.payload);
      });
  },
});

export default TaskSlice.reducer;
