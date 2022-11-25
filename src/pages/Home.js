import React from "react"
import { useSelector } from "react-redux"
import StorySummary from "../components/StorySummary"

const Home = () => {
  const storyIds = useSelector((state) => state.stories.ids) || []

  return storyIds.map((storyId) => {
    return <StorySummary key={storyId} storyId={storyId} />
  })
}

export default Home
