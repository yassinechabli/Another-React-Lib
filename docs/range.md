## Usage

```js
import React, { useState } from 'react'
import { render } from 'react-dom'
import Range from '../../src/Range/Range'

const RangeDemo = () => {
  const getRandomNumberBetween = (min, max) => Math.random() * (max - min) + min

  const [redValue, setRedValue] = useState(getRandomNumberBetween(0, 255))
  const [blueValue, setBlueValue] = useState(getRandomNumberBetween(0, 255))
  const [greenValue, setGreenValue] = useState(getRandomNumberBetween(0, 255))
  const [alphaValue, setAlphaValue] = useState(getRandomNumberBetween(0, 1))

  const updateRed = value => setRedValue(value)
  const updateGreen = value => setGreenValue(value)
  const updateBlue = value => setBlueValue(value)
  const updateAlpha = value => setAlphaValue(value)

  const setToRandom = () => {
    setRedValue(getRandomNumberBetween(0, 255))
    setBlueValue(getRandomNumberBetween(0, 255))
    setGreenValue(getRandomNumberBetween(0, 255))
    setAlphaValue(getRandomNumberBetween(0, 1))
  }

  const color = `rgba(${redValue.toFixed(0)}, ${greenValue.toFixed(0)}, ${blueValue.toFixed(0)}, ${alphaValue.toFixed(4)})`

  return (
    <div>
      <h2>Range Component</h2>
      <div
        style={{
          width: '8rem',
          height: '8rem',
          border: '.5rem solid black',
          margin: '1rem auto',
          borderRadius: '100%',
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textShadow: 'white 0px 0px 1px, white 0px 0px 2px, white 0px 0px 3px, white 0px 0px 4px, 0px 0px 5px white',
          textAlign: 'center',
          userSelect: 'none',
          cursor: 'pointer'
        }}
        onClick={setToRandom}
      >
        Click for a <br /> Random Color
      </div>
      <div style={{ textAlign: 'center', overflow: 'auto' }}>{ color }</div>
      <div style={{ display: 'flex' }}>
        <Range style={{ width: '33.33%' }} dotColor='#FF0000' min={0} max={255} value={redValue} onChange={updateRed} />
        <Range style={{ width: '33.33%' }} dotColor='#00FF00' min={0} max={255} value={greenValue} onChange={updateGreen} />
        <Range style={{ width: '33.33%' }} dotColor='#0000FF' min={0} max={255} value={blueValue} onChange={updateBlue} />
      </div>
      <Range dotColor='grey' min={0} max={1} value={alphaValue} onChange={updateAlpha} />
    </div>
  )
}

export default RangeDemo

```

### Properties

| Property   | Type     | Required | Default value | Description                                           |
| :--------- | :------- | :------- | :------------ | :---------------------------------------------------- |
| `min`      | object   | no       | 0             | The smallest value, furthest left of the bar.         |
| `max`      | string   | no       | 100           | The largest value, furthest right of the bar.         |
| `value`    | number   | no       | 0             | Value between `min` and `max`                         |
| `dotColor` | string   | no       | 'black'       | Color of the dot                                      |
| `onChange` | function | no       |               | Called with `(newValue, oldValue)` on a value change. |