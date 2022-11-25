import React from "react"
import { useSelector } from "react-redux"
import StorySummary from "../components/StorySummary"

const Home = () => {
  const areStoriesLoading =
    useSelector((state) => state.stories.idsStatus) === "pending"
  const storyIdsVisible = useSelector((state) => state.stories.visible) || []

  return areStoriesLoading
    ? "Loading"
    : storyIdsVisible.map((storyId, index) => {
        return (
          <StorySummary key={storyId} storyId={storyId} index={index + 1} />
        )
      })
}

export default Home
