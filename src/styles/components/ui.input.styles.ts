import { FontInterR16 } from '@styles/fonts/inter'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled, { css } from 'styled-components'

export const UIInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

const UIInputIconOnCLickTrue = css`
  cursor: pointer;
`

export interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  value?: string
  readOnly?: boolean
  icon?: {
    value: () => JSX.Element
    onCLick: () => void
  }
}

export interface UIInputIconProps {
  $icon?: UIInputProps['icon']
}

export const UIInputIcon = styled.div<UIInputIconProps>`
  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  ${(props) => props.$icon?.onCLick && UIInputIconOnCLickTrue}

  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${(props) => props.theme.color.black['80']};
    }
  }
`

export const UIInputPlaceholder = css`
  &::placeholder {
    color: ${(props) => props.theme.color.black['40']};
    font-weight: 700;
    opacity: 1;
  }
  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${(props) => props.theme.color.black['40']};
  }
`
export const UIInput = css`
  ${FontInterR16};
  ${UIInputPlaceholder};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${(props) => props.theme.color.black['60']};
  background: ${(props) => props.theme.color.default.white};
  color: ${(props) => props.theme.color.black['80']};
  box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.color.black['100']};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`
