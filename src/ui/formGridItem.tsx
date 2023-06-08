import { FC, ReactNode } from 'react'
import { GridItem, FormLabel, Input, GridItemProps } from '@chakra-ui/react'

import { AnimatedText } from '@/ui'

interface FormGridItemProps extends GridItemProps {
  colSpan: number;
  animatedText: string;
  name: string;
  autoFocused?: boolean;
  isRequired?: boolean;
}

interface AdressGridItemProps extends GridItemProps {
  children: ReactNode | ReactNode[]
}

export const FormGridItem: FC<FormGridItemProps> = ({ colSpan, animatedText, name, autoFocused, isRequired }) => {
  return (
    <GridItem colSpan={colSpan}>
      <FormLabel>
        <AnimatedText>{animatedText}</AnimatedText>
      </FormLabel>
      <Input
        focusBorderColor='red.500'
        borderRadius={0}
        bg='esc-cardBackground'
        name={name}
        autoFocus={autoFocused}
        type='text'
        isRequired={isRequired}
      />
    </GridItem>
  )
}

export const AdressGridItem: FC<AdressGridItemProps> = ({ colSpan, children, ...props }) => {
  return (
    <GridItem colSpan={colSpan} {...props}>
      <AnimatedText>{children}</AnimatedText>
    </GridItem>
  )
}
