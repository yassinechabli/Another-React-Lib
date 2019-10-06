/* global getComputedStyle */
import React, { useRef, useEffect, useState } from 'react'
import { useElementEvents } from './useElementEvents.js'
import { usePointerPosition } from './usePointerPosition.js'
import { useWindowResize } from './useWindowResize.js'
import PropTypes from 'prop-types'
import './Range.css'

const bracket = ({ value, min, max }) => Math.min(Math.max(value, min), max)
const parseCSS = input => {
  if (typeof input === 'string') {
    if (input.includes('px')) {
      return Number(input.replace('px', ''))
    } else {
      console.error('Range ParseCSS Error: Not Configured to parse:', input)
      return input
    }
  } else {
    console.error('Range ParseCSS Error: Only configured to parse type String', input)
    return input
  }
}

// TODO: Figure out how to implement Step

const Range = ({
  className,
  min,
  max,
  value: specifiedValue,
  step,
  onChange,
  dotColor,
  ...rest
}) => {
  const dotElementReference = useRef()
  const rangeRootElementReference = useRef()
  const pointerPosition = usePointerPosition()

  const [calculatedPercentage, setCalculatedPercentage] = useState(0) // eslint-disable-line no-unused-vars
  const [activeValue, setActiveValue] = useState(specifiedValue || 0)
  const [dotPosition, setDotPosition] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const activate = () => setIsActive(true)
  const deactivate = () => setIsActive(false)

  const updatePercentage = percentage => {
    setCalculatedPercentage(percentage)
    repositionDotViaPercentage(percentage)
  }

  const getBounds = () => {
    const { current: dotElement } = dotElementReference
    const { current: rangeRootElement } = rangeRootElementReference
    const { clientWidth: rangeRootWidth, offsetLeft: rangeRootLeft } = rangeRootElement
    const { clientWidth: dotWidth, offsetLeft: dotLeft } = dotElement
    const { x: pointerPositionX } = pointerPosition

    const { paddingLeft, paddingRight } = getComputedStyle(rangeRootElement)

    const rootPadLeft = parseCSS(paddingLeft)
    const rootPadRight = parseCSS(paddingRight)

    const normalizeForDot = value => value - dotLeft - (dotWidth / 2)

    const minRawX = rangeRootLeft + (dotWidth / 2) + rootPadLeft
    const maxRawX = rangeRootLeft + rangeRootWidth - (dotWidth / 2) - rootPadRight

    const bracketedPointerX = bracket({
      min: minRawX,
      max: maxRawX,
      value: pointerPositionX
    })

    const dotMinX = normalizeForDot(minRawX)
    const dotMaxX = normalizeForDot(maxRawX)
    const dotPositionX = normalizeForDot(bracketedPointerX)
    const dotPercentage = (dotPositionX - dotMinX) / (dotMaxX - dotMinX)

    return {
      dotMinX,
      dotMaxX,
      dotPositionX,
      dotPercentage
    }
  }

  const initialize = () => {
    setActiveValue(existingValue => {
      const importantValue = existingValue !== specifiedValue ? specifiedValue : existingValue
      updatePercentage((importantValue - min) / (max - min))
      return importantValue
    })
  }

  const calculateEverything = () => {
    if (isActive) {
      const { dotPercentage } = getBounds()
      setActiveValue((existingValue) => {
        const newValue = dotPercentage * (max - min) + min
        if (newValue !== existingValue) {
          onChange(newValue, existingValue)
        }
        return newValue
      })
      updatePercentage(dotPercentage)
    }
  }

  const repositionDotViaPercentage = percentage => {
    const { dotMinX, dotMaxX } = getBounds()
    setDotPosition(percentage * (dotMaxX - dotMinX) + dotMinX)
  }

  // this deactivates an active component regardless of
  // where the pointer is in the dom.
  useElementEvents(
    document,
    {
      pointerup () {
        setIsActive(isActive => {
          if (isActive) {
            return false
          }
        })
      }
    }
  )

  // this recalculates the dot position on window resize
  useWindowResize(() => {
    setCalculatedPercentage(percentage => {
      repositionDotViaPercentage(percentage)
      return percentage
    })
  })

  // this runs when we need to set things up based on new values
  // that are given to this component
  useEffect(() => {
    initialize()
  }, [min, max, specifiedValue, step])

  // this runs each time there is an update
  useEffect(() => calculateEverything())

  return (
    <div
      {...rest}
      ref={rangeRootElementReference}
      title={`Value: ${activeValue}`}
      className={(`range ${className}`).trim()}
      onPointerDown={() => activate()}
      onPointerUp={() => deactivate()}
      onPointerCancel={() => deactivate()}
    >
      <div
        className='range-dot'
        ref={dotElementReference}
        style={{
          transform: `translateX(${dotPosition}px)`,
          background: `${dotColor}`
        }}
      />
    </div>
  )
}

Range.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  dotColor: PropTypes.string
}

Range.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  dotColor: 'black'
}

export default Range
