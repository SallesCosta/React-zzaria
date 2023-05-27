import { Center, Flex, Text } from '@chakra-ui/react'

import { LanguageProps } from '@/contexts/langContext'
import { useLang } from '@/contexts'
import { Bold } from '@/ui'

type LnProps = {
  children: LanguageProps;
  isLast: boolean;
};

export const LangControl = () => {
  const { LanguageList } = useLang()
  return (
    <Flex>
      {LanguageList.map((l, index) => {
        const isLast = index === LanguageList.length - 1
        return (
          <Ln key={index} isLast={isLast}>
            {l}
          </Ln>
        )
      })}
    </Flex>
  )
}

const Ln = ({ children, isLast }: LnProps) => {
  const { handleChangeLanguage, language } = useLang()

  const selected = language === children

  const Component = selected ? Bold : Text

  const hasBoxShadow = selected ? 'esc-shadow-lg-bottom' : ''

  return (
    <Center
      w='10'
      h='8'
      cursor='pointer'
      borderRight={!isLast ? '1px' : ''}
      borderColor='esc-border'
      padding='2'
      boxShadow={hasBoxShadow}
    >
      <Component onClick={() => handleChangeLanguage(children)}>
        {children}
      </Component>
    </Center>
  )
}
