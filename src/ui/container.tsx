import { FC, ReactNode } from 'react'
import { Stack, StackProps } from '@chakra-ui/react'

interface ContainerProps extends StackProps {
  children: ReactNode | ReactNode[];
}

export const Container: FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  return (
    <Stack
      bg='esc-cardBackground'
      alignItems='center'
      w='100%'
      p='1em 2em'
      minH='80px'
      flexDir={{ base: 'column', sm480: 'row' }}
      {...props}
    >
      {children}
    </Stack>
  )
}
