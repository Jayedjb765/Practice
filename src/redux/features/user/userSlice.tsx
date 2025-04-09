import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  users: IUser[];
}
const initialState: InitialState = {
  users: [],
};

type Drafuser = Pick<IUser, "name">;
const createUser = (userData: Drafuser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Drafuser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
