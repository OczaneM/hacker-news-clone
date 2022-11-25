import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getStory } from "../store/stories"

const StorySummary = ({ storyId, index, isSaved }) => {
  const dispatch = useDispatch()
  const storySummaryStatus =
    useSelector((state) => state.stories.statusBySummary[storyId]) || "pending"
  const { by, descendants, score, time, title, url } =
    useSelector((state) => state.stories.summaries[storyId]) || {}

  useEffect(() => {
    if (storySummaryStatus === "pending") dispatch(getStory(storyId))
  }, [])

  return (
    <div>
      {storySummaryStatus === "fulfilled" ? (
        <div className="story-summary">
          <div className="heading">
            {index}. <span className="title">{title}</span>{" "}
            <span className="source">({url})</span>
          </div>
          <div className="body">
            <span className="score">{score} points </span>
            <span className="by">by {by} </span>
            <span className="time">{time} | </span>
            <span className="numberofcomments">{descendants} comments | </span>
            <button className={`savebutton ${isSaved && "-saved"}`}></button>
          </div>
        </div>
      ) : (
        "loading story"
      )}
    </div>
  )
}

StorySummary.propTypes = {
  storyId: PropTypes.number,
  index: PropTypes.number,
  isSaved: PropTypes.bool,
}

export default StorySummary
