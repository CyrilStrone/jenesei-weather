import styled, { css } from 'styled-components'

export interface SpanInterProps {
  color?: string
  width?: string
  textAlign?: 'center'
  textWrap?: 'nowrap'
}

const FontInter = css<SpanInterProps>`
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
    props.color ? props.color : props.theme.color.default.white};
  width: ${(props) => (props.width ? props.width : 'auto')};
  text-align: ${(props) => props.textAlign};
  text-wrap: ${(props) => props.textWrap};
`

export const FontInterSB10 = css`
  ${FontInter};
  font-size: 10px;
  font-weight: 600;
`
export const SpanInterSB10 = styled.span<SpanInterProps>`
  ${FontInterSB10};
`

export const FontInterSB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 600;
`
export const SpanInterSB14 = styled.span<SpanInterProps>`
  ${FontInterSB14};
`

export const FontInterSB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 600;
`
export const SpanInterSB16 = styled.span<SpanInterProps>`
  ${FontInterSB16};
`

const FontInterSB18 = css`
  ${FontInter};
  font-size: 18px;
  font-weight: 600;
`
export const SpanInterSB18 = styled.span<SpanInterProps>`
  ${FontInterSB18};
`

const FontInterSB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 600;
`
export const SpanInterSB20 = styled.span<SpanInterProps>`
  ${FontInterSB20};
`

export const FontInterM12 = css`
  ${FontInter};
  font-size: 12px;
  font-weight: 500;
`
export const SpanInterM12 = styled.span<SpanInterProps>`
  ${FontInterM12};
`

export const FontInterM14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 500;
`
export const SpanInterM14 = styled.span<SpanInterProps>`
  ${FontInterM14};
`

export const FontInterM16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 500;
`
export const SpanInterM16 = styled.span<SpanInterProps>`
  ${FontInterM14};
`

export const FontInterM18 = css`
  ${FontInter};
  font-size: 18px;
  font-weight: 500;
`

export const SpanInterM18 = styled.span<SpanInterProps>`
  ${FontInterM18};
`

export const FontInterM20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 500;
`

export const SpanInterM20 = styled.span<SpanInterProps>`
  ${FontInterM20};
`

export const FontInterM22 = css`
  ${FontInter};
  font-size: 22px;
  font-weight: 500;
`
export const SpanInterM22 = styled.span<SpanInterProps>`
  ${FontInterM22};
`

export const FontInterB14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 700;
`
export const SpanInterB14 = styled.span<SpanInterProps>`
  ${FontInterB14};
`

export const FontInterB16 = css`
  ${FontInter};
  font-size: 16px;
  font-weight: 700;
`
export const SpanInterB16 = styled.span<SpanInterProps>`
  ${FontInterB16};
`

export const FontInterB20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 700;
`
export const SpanInterB20 = styled.span<SpanInterProps>`
  ${FontInterB20};
`

const FontInterB32 = css`
  ${FontInter};
  font-size: 32px;
  font-weight: 700;
`
export const SpanInterB32 = styled.span<SpanInterProps>`
  ${FontInterB32};
`

const FontInterB36 = css`
  ${FontInter};
  font-size: 36px;
  font-weight: 700;
`
export const SpanInterB36 = styled.span<SpanInterProps>`
  ${FontInterB36};
`

const FontInterR12 = css`
  ${FontInter};
  font-size: 12px;
  font-weight: 400;
`
export const SpanInterR12 = styled.span<SpanInterProps>`
  ${FontInterR12};
`

const FontInterR14 = css`
  ${FontInter};
  font-size: 14px;
  font-weight: 400;
`
export const SpanInterR14 = styled.span<SpanInterProps>`
  ${FontInterR14};
`

export const FontInterR16 = css`
  ${FontInter};
  font-size: 16px !important;
  font-weight: 400;
`
export const SpanInterR16 = styled.span<SpanInterProps>`
  ${FontInterR16};
`

export const FontInterR19 = css`
  ${FontInter};
  font-size: 19px !important;
  font-weight: 400;
`

const FontInterR20 = css`
  ${FontInter};
  font-size: 20px;
  font-weight: 400;
`
export const SpanInterR20 = styled.span<SpanInterProps>`
  ${FontInterR20};
`

const FontInterR24 = css`
  ${FontInter};
  font-size: 24px;
  font-weight: 400;
`
export const SpanInterR24 = styled.span<SpanInterProps>`
  ${FontInterR24};
`

export const FontInterR36 = css`
  ${FontInter};
  font-size: 36px;
  font-weight: 400;
`
export const SpanInterR36 = styled.span<SpanInterProps>`
  ${FontInterR36};
`

const FontInterT100 = css`
  ${FontInter};
  font-size: 100px;
  font-weight: 100;
`
export const SpanInterT10 = styled.span<SpanInterProps>`
  ${FontInterT100};
`
