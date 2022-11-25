import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewStories } from "../store/stories"
import Home from "../pages/Home"

// This is where app initialization occurs
// Renders routes
const Main = () => {
  const newStoriesStatus = useSelector((state) => state.stories.status)
  const dispatch = useDispatch()

  useEffect(() => {
    if (newStoriesStatus === "pending") dispatch(getNewStories())
  }, [])

  return <Home />
}

export default Main
