import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getStory } from "../store/stories"

const StorySummary = ({ storyId }) => {
  const dispatch = useDispatch()
  const storySummaryStatus = useSelector(
    (state) => state.stories.statusBySummary[storyId]
  )
  const storySummary = useSelector((state) => state.stories.summaries[storyId])

  useEffect(() => {
    if (!storySummaryStatus || storySummaryStatus === "pending")
      dispatch(getStory(storyId))
  }, [])

  return <div>{storySummary}</div>
}

StorySummary.propTypes = {
  storyId: PropTypes.number,
}

export default StorySummary
