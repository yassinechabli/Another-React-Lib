## Usage

```js
import React from 'react';
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

  const color = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`

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
          backgroundColor: color
        }}
        onClick={setToRandom}
      />
      <div style={{ textAlign: 'center' }}>{ color }</div>
      <div style={{ display: 'flex' }}>
        <Range style={{ width: '33.33%' }} dotColor='red' min={0} max={255} value={redValue} onChange={updateRed} />
        <Range style={{ width: '33.33%' }} dotColor='green' min={0} max={255} value={greenValue} onChange={updateGreen} />
        <Range style={{ width: '33.33%' }} dotColor='blue' min={0} max={255} value={blueValue} onChange={updateBlue} />
      </div>
      <Range dotColor='grey' min={0} max={1} value={alphaValue} onChange={updateAlpha} />
    </div>
  )
}
```

### Properties

| Property   | Type     | Required | Default value | Description                                       |
| :--------- | :------- | :------- | :------------ | :------------------------------------------------ |
| `value`    | number   | yes      | 0             | Progress of the bar                               |
| `min`      | object   | no       | {}            | Style object of the container of the progress bar |
| `max`      | string   | no       | ''            | Classname of the container of the progress bar    |
| `step`     | string   | no       | red           | Color that must fill the bar.                     |
| `dotColor` | string   | no       | red           | Color that must fill the bar.                     |
| `onChange` | function | no       | red           | Color that must fill the bar.                     |