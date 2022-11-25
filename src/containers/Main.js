import React, { useEffect, useState } from "react"
import { getNewStories } from "../api/stories"

const Main = () => {
  const [latestStories, setLatestStories] = useState([])

  useEffect(() => {
    getNewStories().then((stories) => setLatestStories(stories))
  }, [])

  return <div>{latestStories}</div>
}

export default Main
