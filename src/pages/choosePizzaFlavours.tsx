import { ChangeEvent, lazy, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  Text,
  Stack,
  GridItem,
  SimpleGrid,
  Image,
  VStack,
  Checkbox,
  VisuallyHidden,
} from '@chakra-ui/react'

import {
  singleOrPlural,
  toMoney,
  CHOOSE_PIZZA_QUANTITY,
  useCollection,
} from '@/helpers'

import langSource from '@/lang/langSource.json'
import { H1, AnimatedText } from '@/ui'
import { useLang } from '@/contexts'
import { EachFlavourProps } from '@/contexts/orderContext'

const Footer = lazy(() => import('@/pages/components/footer'))

const ChoosePizzaFlavours = () => {
  const [checkboxes, setCheckboxes] = useState<any>(() => ({}))
  const { data, isFetching } = useCollection('pizzasFlavours')

  const { language } = useLang()

  const location = useLocation()
  const l = langSource[language]

  const PizzaFlavours = data

  const { flavours } = location.state.size

  const flavoursQuantity = singleOrPlural(
    flavours,
    `${l.flavor} `,
    `${l.flavors} `,
  ).toLowerCase()

  const checkboxesChecked = Object.values(checkboxes).filter(Boolean).length

  const handleChangeCheckbox =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      if (checkboxesChecked === flavours && e.target.checked === true) return
      setCheckboxes((checkboxes: any) => {
        return {
          ...checkboxes,
          [id]: e.target.checked,
        }
      })
    }

  const getFlavoursNameAndId = (checkboxes: any) => {
    return Object.entries(checkboxes)
      .filter(([_, value]) => !!value)
      .map(([id]) => ({
        id,
        name: PizzaFlavours?.find((flavour: EachFlavourProps) => flavour.id === id),
      }))
  }

  return (
    <>
      <Stack
        flexGrow={1}
        w='100%'
        maxW='960px'
        textAlign='center'
        as='main'
        pt='2em'
      >
        <H1>
          <AnimatedText>
            {l.chooseUpTo} {flavours} {flavoursQuantity}
          </AnimatedText>
        </H1>
        <SimpleGrid
          pt='1em'
          minChildWidth='288px' // 320px - 2* 1em (32px)
          gap={6}
          w='100%'
        >
          {isFetching && <div>Loading...</div>}
          {PizzaFlavours &&
            PizzaFlavours.map((pizza: EachFlavourProps) => (
              <GridItem
                key={pizza.id}
              >
                <label htmlFor={pizza.name}>
                  {checkboxes && (
                    <VStack
                      borderRadius='lg'
                      bg='esc-cardBackground'
                      cursor='pointer'
                      border={checkboxes[pizza.id] ? '2px' : ''}
                      borderColor={checkboxes[pizza.id] ? '#ffcc00' : ''}
                      boxShadow={
                        checkboxes[pizza.id] ? 'esc-shadow-lg-bottom' : 'base'
                      }
                    >
                      <VisuallyHidden>
                        <Checkbox
                          onChange={handleChangeCheckbox(pizza.id)}
                          isChecked={!!checkboxes[pizza.id]}
                          id={pizza.name}
                        // size='lg'
                        />
                      </VisuallyHidden>
                      <Image
                        borderRadius='full'
                        boxSize='200px'
                        src={pizza.image}
                        alt={`foto pizza de ${pizza.name}`}
                      />
                      <Text>{pizza.name}</Text>
                      <Text>{toMoney(pizza.value[0], language)}</Text>
                    </VStack>
                  )}
                </label>
              </GridItem>
            ))}
        </SimpleGrid>
      </Stack>
      <Footer
        buttons={{
          back: {
            children: `${l.changeSize}`,
            variant: 'secondary',
          },
          action: {
            isDisabled: checkboxesChecked === 0,
            to: CHOOSE_PIZZA_QUANTITY,
            children: `${l.chooseQuantity}`,
            variant: 'primary',
            state: {
              ...location.state,
              flavours: getFlavoursNameAndId(checkboxes),
            },
          },
        }}
      />
    </>
  )
}

export default ChoosePizzaFlavours
