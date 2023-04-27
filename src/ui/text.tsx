import { Heading, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type TextProps = {
  children: ReactNode | ReactNode[];
  props?: any;
};

export const H1 = ({ children, props }: TextProps) => {
  return (
    <Heading as='h1' size='2xl' {...props}>
      {children}
    </Heading>
  )
}

export const H2 = ({ children, props }: TextProps) => {
  return (
    <Heading as='h2' size='xl' {...props}>
      {children}
    </Heading>
  )
}

export const Bold = ({ children, props }: TextProps) => {
  return (
    <Text as='b' {...props}>
      {children}
    </Text>
  )
}
