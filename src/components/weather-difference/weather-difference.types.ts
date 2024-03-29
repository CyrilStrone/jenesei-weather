export interface WeatherDifferenceProps {
  list: {
    maxtemp: number
    mintemp: number
  }
  day: {
    maxtemp: number
    mintemp: number
  }
  now?: {
    temp?: number
  }
  className?: string
}
