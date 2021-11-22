import './../../vendor/range-slider/Slider.css'
import '../../vendor/range-slider/Slider.bundle'
import Slider from '../../vendor/range-slider/Slider.bundle'

const rangeSlider = new Slider('range-slider', {
    shouldAddBar:true, minValue: 0, maxValue:20000, step:1000
  }
)