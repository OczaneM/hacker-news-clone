import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { getStory } from "../api/stories"

const StorySummary = ({ storyId }) => {
  const [summary, setSummary] = useState("")

  useEffect(() => {
    getStory(storyId).then((story) => setSummary(JSON.stringify(story)))
  }, [])

  return <div>{summary}</div>
}

StorySummary.propTypes = {
  storyId: PropTypes.number,
}

export default StorySummary
