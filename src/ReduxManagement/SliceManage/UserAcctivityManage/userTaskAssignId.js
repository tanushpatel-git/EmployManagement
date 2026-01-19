import {createSlice} from "@reduxjs/toolkit";

const userTaskAssignId = createSlice({
    name: 'userTaskAssignId',
    initialState: {
        id:0,
    },
    reducers: {
        updateUserTaskStatus: (state, action) => {
            state.id = action.payload;
        }
    }
})
export default userTaskAssignId.reducer;
export const {updateUserTaskStatus} = userTaskAssignId.actions;