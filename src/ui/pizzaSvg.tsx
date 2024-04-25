import { FC } from 'react'
import { PizzaSvg } from '@/assets'
import { Box, BoxProps } from '@chakra-ui/react'

interface PizzaSvgComponentProps extends BoxProps {
  width: string;
}

export const PizzaSvgComponent: FC<PizzaSvgComponentProps> = ({
  width,
  ...props
}: PizzaSvgComponentProps) => {
  return (
    <Box
      sx={{
        svg: {
          width,
          height: 'auto',
          margin: 'auto',
          minW: '100px',
          maxW: '180px',
        },
        path: {
          fill: 'esc-text',
        },
        line: {
          stroke: 'esc-text',
        },
      }}
      {...props}
    >
      <PizzaSvg />
    </Box>
  )
}
