import {
  singleOrPlural,
  toMoney,
  PizzaFlavours,
  CHOOSE_PIZZA_QUANTITY,
} from '@/helpers'
import { useLocation } from 'react-router-dom'
import { ChangeEvent, lazy, useState } from 'react'
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
import { H1 } from '@/ui/text'

const Footer = lazy(() => import('@/pages/components/Footer'))

const ChoosePizzaFlavours = () => {
  const [checkboxes, setCheckboxes] = useState<any>(() => ({}))
  const [disabled, setDisabled] = useState<boolean>(true)
  const location = useLocation()

  const { flavours } = location.state.pizzaSize // quantity of flavours choosed
  const flavoursQuantity = singleOrPlural(
    location.state.flavours,
    'Escolha o sabor',
    `Escolha até ${flavours} sabores`,
  )

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
        name: PizzaFlavours.find((flavour) => flavour.id === id),
      }))
  }

  return (
    <>
      <Stack flexGrow={1} w='100%' maxW='960px' textAlign='center' as='main'>
        <H1>{flavoursQuantity}</H1>
        <SimpleGrid
          minChildWidth='288px' // 320px - 2* 1em (32px)
          gap={6}
          w='100%'
          p='2em 1em'
        >
          {PizzaFlavours.map((pizza) => (
            <GridItem key={pizza.id}>
              <label htmlFor={pizza.name}>
                {checkboxes && (
                  <VStack
                    cursor='pointer'
                    borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                    w='100%'
                    border={checkboxes[pizza.id] ? '2px' : '1'}
                    borderColor='btn-active-border'
                    boxShadow={checkboxes[pizza.id] ? 'lg' : 'base'}
                  >
                    <VisuallyHidden>
                      <Checkbox
                        onChange={handleChangeCheckbox(pizza.id)}
                        isChecked={!!checkboxes[pizza.id]}
                        id={pizza.name}
                        size='lg'
                      />
                    </VisuallyHidden>
                    <Image
                      borderRadius='full'
                      boxSize='200px'
                      src={pizza.image}
                      alt={`foto pizza de ${pizza.name}`}
                    />
                    <Text>{pizza.name}</Text>
                    <Text>{toMoney(pizza.value[0])}</Text>
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
            children: 'Mudar tamanho',
            variant: 'solid',
          },
          action: {
            disabled: checkboxesChecked === 0,
            to: CHOOSE_PIZZA_QUANTITY,
            children: 'Quantas pizzas',
            variant: 'primary',
            state: {
              ...location.state,
              pizzaFlavours: getFlavoursNameAndId(checkboxes),
            },
          },
        }}
      />
    </>
  )
}

export default ChoosePizzaFlavours
