import { WidgetUVIndexProps } from '.'
import { IconWeather } from '@assets/icons/icon-weather'
import { getUVIndexToTitle } from '@functions/get-uvIndex-to-title copy'
import { LayoutWidget } from '@layouts/layout-widget'
import {
  FrameWidgetStyledPointRelativeToLine,
  FrameWidgetTitleContainer,
} from '@styles/components'
import { SpanInterM20, SpanInterR12 } from '@styles/fonts/inter'
import { FC } from 'react'

export const WidgetUVIndex: FC<WidgetUVIndexProps> = (props) => {
  return (
    <LayoutWidget
      height="94px"
      title={
        <>
          <IconWeather.UVIndex />
          <SpanInterR12>UV INDEX</SpanInterR12>
        </>
      }
      content={
        props.data && (
          <>
            <FrameWidgetTitleContainer>
              <SpanInterM20>
                {props.data.current.uvi +
                  ' ' +
                  getUVIndexToTitle(props.data.current.uvi)}
              </SpanInterM20>
            </FrameWidgetTitleContainer>
            <FrameWidgetStyledPointRelativeToLine
              value={props.data.current.uvi}
              maxValue={12}
              gradient="90.00deg, rgb(101, 219, 124) 1.169%,rgb(245, 231, 83) 24.979%,rgb(230, 58, 82) 77.888%,rgb(181, 93, 224) 99.237%"
            />
          </>
        )
      }
    />
  )
}
