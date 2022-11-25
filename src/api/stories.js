import axios from "axios"

const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const newStories = `${baseUrl}/newstories.json`
// const individualItemUrl = `${baseUrl}/item/${itemId}.json?print=pretty`

export const getNewStories = async () => {
  try {
    const newStoriesRes = await axios
      .get(newStories)
      .then((response) => response.data)
    return newStoriesRes
  } catch (error) {
    console.error(error)
  }
}
