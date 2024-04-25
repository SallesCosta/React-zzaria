import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HOME } from '@/helpers'

import { SvgLogo } from '@/assets'

type LogoProps = {
  width: string;
};

export const Logo = ({ width }: LogoProps) => {
  return (
    <Box
      justifyContent='center'
      sx={{
        svg: {
          width,
          height: 'auto',
        },
        path: {
          fill: 'esc-text',
        },
        line: {
          stroke: 'esc-text',
        },
      }}
    >
      <Box display='inline-block'>
        <Link to={HOME}>
          <SvgLogo />
        </Link>
      </Box>
    </Box>
  )
}
