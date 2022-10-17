import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const Provider = styled(Toast.Provider, {
  position: 'absolute',
  botton: '0',
  right: '0',
})
export const Viewport = styled(Toast.Viewport, {})

export const Root = styled(Toast.Root, {
  listStyle: 'none',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '12px 20px',

  display: 'flex',
  alignItems: 'flex-start',
  gap: 4,
  flexDirection: 'column',
  width: '22.5rem',

  position: 'relative',
})

export const Close = styled(Toast.Close, {
  position: 'absolute',
  right: '12px',
  top: '12px',
  background: 'transparent',
  border: 0,
  color: '$gray200',
  cursor: 'pointer',
})

export const Title = styled(Heading, {
  color: '$white',
})

export const Description = styled(Text, {
  color: '$gray200',
})
