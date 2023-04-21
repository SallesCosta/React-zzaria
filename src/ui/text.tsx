import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type TextProps = {
  children: ReactNode | ReactNode[];
};

export const H1 = ({ children }: TextProps) => {
  return (
    <Heading as='h1' size='2xl'>
      {children}
    </Heading>
  )
}

export const H2 = ({ children }: TextProps) => {
  return (
    <Heading as='h2' size='xl'>
      {children}
    </Heading>
  )
}
