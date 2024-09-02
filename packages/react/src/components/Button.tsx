import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  boxSizing: 'border-box',
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 135,
  height: 38,
  padding: '.1rem',
  borderRadius: '$xs',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$black',
      },

      secondary: {
        color: '$gray-500',
        border: '2px solid $gray-900',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonVariant = "primary" | "secondary"

export type ButtonProps = ComponentProps<"button"> &  {
  variant: ButtonVariant
}

Button.displayName = 'Button'