import { Slider } from 'tamagui'

export default function CustomSlider() {
  return (
    <Slider size='$1.5' w='100%' defaultValue={[50]} max={100} step={1}>
      <Slider.Track>
        <Slider.TrackActive />
      </Slider.Track>
      <Slider.Thumb index={0} circular elevate />
    </Slider>
  )
}
