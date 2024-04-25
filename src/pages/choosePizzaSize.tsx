import langSource from '@/lang/langSource.json'

import { useLang } from '@/contexts'
import {
  Skeleton,
  Text,
  Stack,
  Box,
  GridItem,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { AnimatedText, H1, H2, PizzaSvgComponent } from '@/ui'
import { useCollection, CHOOSE_PIZZA_FLAVOURS } from '@/helpers'
import { PizzaSize } from '@/contexts/orderContext'

const ChoosePizzaSize = () => {
  const { language } = useLang()

  const { data, isFetching } = useCollection('pizzasSizes')

  if (data && data.length === 0) {
    return 'empty db'
  }

  const PizzaSizes = (!isFetching && data !== null) && data

  const l = langSource[language]

  return (
    <Stack maxW='960px' w='100%' textAlign='center' as='main' pt='2em'>
      <H1>
        <AnimatedText>{l.whatToOrder}</AnimatedText>
      </H1>
      <H2>
        <AnimatedText>{l.chooseSize}</AnimatedText>
      </H2>
      <SimpleGrid
        minChildWidth='288px' // 320px - 2* 1em (32px)
        gap={6}
        w='100%'
        p='2em 1em'
      >
        {isFetching &&
          [1, 2, 3, 4, 5].map((n) => (
            <GridItem key={n}>
              <Skeleton
                borderWidth='1px'
                borderRadius='lg'
                w='100%'
                h='300px'
              />
            </GridItem>
          ))}
        {PizzaSizes && PizzaSizes?.map((pizza: PizzaSize) => {
          return (
            <GridItem key={pizza.name}>
              <Link state={{ size: pizza }} to={CHOOSE_PIZZA_FLAVOURS}>
                <VStack
                  borderWidth='1px'
                  bg='esc-cardBackground'
                  borderRadius='lg'
                  overflow='hidden'
                  w='100%'
                  h='auto'
                  minH='300px'
                  maxH='310px'
                  justifyContent='space-between'
                  p='10px'
                >
                  <Text>{l[pizza.name as keyof typeof l]}</Text>
                  <PizzaSvgComponent width={`${pizza.slices * 6}`} />
                  <Box>
                    <Text>{pizza.size}cm</Text>
                    <Text>{pizza.slices} {l.slices} - {pizza.flavours} {l.flavors}</Text>
                  </Box>
                </VStack>
              </Link>
            </GridItem>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default ChoosePizzaSize
