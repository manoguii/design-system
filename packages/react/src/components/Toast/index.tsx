import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Close, Description, Provider, Root, Title, Viewport } from './styles'

export interface ToastProps extends ComponentProps<typeof Root> {
  title: string
  description: string
  open: boolean
  props?: ToastProps
}

export function Toast({ description, title, props }: ToastProps) {
  return (
    <Provider>
      <Root {...props}>
        <Title size={'sm'}>{title}</Title>
        <Description as="time" size={'sm'}>
          {description}
        </Description>
        <Close>
          <X width={12} height={12} weight="bold" />
        </Close>
      </Root>

      <Viewport />
    </Provider>
  )
}
