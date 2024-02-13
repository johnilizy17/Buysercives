import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	isOnboarded: true,
};


export const portfolioSlice = createSlice({
	name: "portfolio",
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		clearSession: (state, { payload }) => {
			state.user = {};
		},
	},
});

export const { clearSession, setUser } = portfolioSlice.actions;

export default portfolioSlice.reducer;