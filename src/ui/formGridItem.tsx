import { FC } from 'react'
import { GridItem, FormLabel, Input } from '@chakra-ui/react'

import { AnimatedText } from '@/ui'

type FormGridItemProps = {
  colSpan: number;
  animatedText: string;
  name: string;
}
export const FormGridItem: FC<FormGridItemProps> = ({ colSpan, animatedText, name }) => {
  return (
    <GridItem colSpan={colSpan}>
      <FormLabel>
        <AnimatedText>{animatedText}</AnimatedText>
      </FormLabel>
      <Input
        borderRadius={0}
        bg='esc-cardBackground'
        name={name} autoFocus type='text'
      />
    </GridItem>
  )
}
