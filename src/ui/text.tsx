import { Heading, Text, HeadingProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props extends HeadingProps {
  children: ReactNode | ReactNode[];
  props?: any;
}

export const H1 = ({ children, props }: Props) => {
  return (
    <Heading as='h1' size='2xl' {...props}>
      {children}
    </Heading>
  )
}

export const H2 = ({ children, props }: Props) => {
  return (
    <Heading as='h2' size='xl' {...props}>
      {children}
    </Heading>
  )
}

export const H4 = ({ children, props }: Props) => {
  return (
    <Heading as='h4' size='md' {...props}>
      {children}
    </Heading>
  )
}

export const Bold = ({ children, props }: Props) => {
  return (
    <Text as='b' {...props}>
      {children}
    </Text>
  )
}

export const AnimatedText = ({ children, ...props }: Props) => {
  return (
    <Text
      key={children?.toString()}
      sx={{
        animation: 'fade-in 0.5s ease-in-out',
        '@keyframes fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
      as='p'
      {...props}
    >
      {children}
    </Text>
  )
}
