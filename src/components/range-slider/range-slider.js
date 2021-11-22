import './../../vendor/range-slider/Slider.css'
import Slider from './../../vendor/range-slider/Slider.bundle'



const rangeSliderText = document.querySelector('#range-slider__text')

const params = {
  isRange: true,
  shouldAddBar:true, 
  minValue: 0, 
  maxValue:16000, 
  step:1000,
  runnerSize: [12,12],
  runnersInstantPosition: [5000, 10000],
  };
  // 
const handleChange = function handleSliderChange(params) {
  rangeSliderText.textContent = `${params.runnersInstantPosition[0]}-${params.runnersInstantPosition[1]}`;
}
params.onChange = handleChange;

const rangeSlider = new Slider('range-slider',params )