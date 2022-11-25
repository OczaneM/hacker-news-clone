import React from "react"
import PropTypes from "prop-types"
// import { useSelector, useDispatch } from "react-redux"

const StorySummary = ({ storyId }) => {
  return <div>{storyId}</div>
}

StorySummary.propTypes = {
  storyId: PropTypes.number,
}

export default StorySummary
