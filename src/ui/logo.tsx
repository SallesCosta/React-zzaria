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
          fill: 'esc-textHeading',
        },
        line: {
          stroke: 'esc-textHeading',
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
