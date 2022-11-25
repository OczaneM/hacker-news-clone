import React, { useEffect, useState } from "react"
import { getNewStories } from "../api/stories"
import StorySummary from "./StorySummary"

const Main = () => {
  const [latestStoriesIds, setLatestStoriesIds] = useState([])

  useEffect(() => {
    getNewStories().then((stories) => setLatestStoriesIds(stories.slice(0, 2)))
  }, [])

  return latestStoriesIds.map((storyId) => {
    return <StorySummary key={storyId} storyId={storyId} />
  })
}

export default Main
