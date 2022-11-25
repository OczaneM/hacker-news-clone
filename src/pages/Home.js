import React from "react"
import { useSelector } from "react-redux"
import Story from "../components/Story"
import {
  getFetchStatusForAllStoryIds,
  getAllVisibleStoryIds,
} from "../store/stories"

const Home = () => {
  const areStoriesLoading =
    useSelector(getFetchStatusForAllStoryIds) === "pending"
  const storyIdsVisible = useSelector(getAllVisibleStoryIds)

  return areStoriesLoading
    ? "Loading"
    : storyIdsVisible.map((storyId, index) => {
        return <Story key={storyId} storyId={storyId} index={index + 1} />
      })
}

export default Home
