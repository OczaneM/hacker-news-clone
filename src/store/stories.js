import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const newStoriesUrl = `${baseUrl}/newstories.json`

export const getNewStories = createAsyncThunk(
  "stories/getNewStories",
  async () => {
    try {
      // ordered by date, descending
      const newStoriesRes = await axios
        .get(newStoriesUrl)
        .then((res) => res.data)
      return newStoriesRes
    } catch (error) {
      console.error(error)
    }
  }
)

export const getStory = createAsyncThunk("stories/getStory", async (id) => {
  try {
    const story = await axios
      .get(`${baseUrl}/item/${id}.json?print=pretty`)
      .then((res) => res.data)
    return story
  } catch (error) {
    console.error(error)
  }
})

export const storiesSlice = createSlice({
  name: "stories",
  initialState: {
    ids: [],
    summaries: {},
    idsStatus: "pending",
    statusBySummary: {},
    visible: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewStories.pending, (state) => {
        state.idsStatus = "pending"
      })
      .addCase(getNewStories.fulfilled, (state, action) => {
        state.ids = action.payload
        state.visible = action.payload.slice(0, 12)
        state.idsStatus = "fulfilled"
      })
      .addCase(getNewStories.rejected, (state) => {
        state.idsStatus = "rejected"
      })

    builder
      .addCase(getStory.pending, (state, action) => {
        state.statusBySummary[action.meta.arg] = "pending"
      })
      .addCase(getStory.fulfilled, (state, action) => {
        state.summaries[action.meta.arg] = action.payload
        state.statusBySummary[action.meta.arg] = "fulfilled"
      })
      .addCase(getStory.rejected, (state, action) => {
        state.statusBySummary[action.meta.arg] = "rejected"
      })
  },
})

// Action creators are generated for each case reducer function
// export const {} = storiesSlice.actions

export default storiesSlice.reducer
