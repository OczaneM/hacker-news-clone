import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const newStoriesUrl = `${baseUrl}/newstories.json`

export const getNewStories = createAsyncThunk(
  "stories/getNewStories",
  async () => {
    try {
      const newStoriesRes = await axios
        .get(newStoriesUrl)
        .then((res) => res.data)
      return newStoriesRes
    } catch (error) {
      console.error(error)
    }
  }
)

export const storiesSlice = createSlice({
  name: "stories",
  initialState: {
    ids: [],
    status: "pending",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewStories.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getNewStories.fulfilled, (state, action) => {
        state.ids = action.payload
        state.status = "fulfilled"
      })
      .addCase(getNewStories.rejected, (state) => {
        state.status = "rejected"
      })
  },
})

// Action creators are generated for each case reducer function
// export const {} = storiesSlice.actions

export default storiesSlice.reducer
