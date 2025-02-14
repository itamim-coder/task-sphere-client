import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  notifications: string[]; // Change this to an array
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<string>) => {
      state.notifications.push(action.payload); // Append new notification
    },
    clearNotifications: (state) => {
      state.notifications = []; // Clear all notifications
    },
  },
});

export const { setNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
