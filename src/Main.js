import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewStories, getFetchStatusForAllStoryIds } from "./store/stories"
import Routes from "./routes"

// This is where app initialization occurs
// Renders routes
const Main = () => {
  const newStoriesStatus = useSelector(getFetchStatusForAllStoryIds)
  const dispatch = useDispatch()

  useEffect(() => {
    if (newStoriesStatus === "pending") dispatch(getNewStories())
  }, [])

  return <Routes />
}

export default Main
