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

const ChoosePizzaSize = () => {
  const { language } = useLang()

  const { data, isFetching } = useCollection('pizzasSizes')

  const PizzaSizes = data

  if (PizzaSizes && PizzaSizes.length === 0) {
    return 'empty db'
  }

  const height = 'auto'

  const arr: number[] = [1, 2, 3, 4, 5]

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
          arr.map((n) => (
            <GridItem key={n}>
              <Skeleton
                borderWidth='1px'
                borderRadius='lg'
                w='100%'
                h='300px'
              />
            </GridItem>
          ))}
        {PizzaSizes?.map((pizza: any) => (
          <GridItem key={pizza.name}>
            <Link state={{ pizzaSize: pizza }} to={CHOOSE_PIZZA_FLAVOURS}>
              <VStack
                borderWidth='1px'
                bg='esc-cardBackground'
                borderRadius='lg'
                overflow='hidden'
                w='100%'
                h={height}
                minH='300px'
                maxH='310px'
                justifyContent='space-between'
                p='10px'
              >
                <Text>{pizza.name}</Text>
                <PizzaSvgComponent width={`${pizza.slices * 6}`} />
                <Box>
                  <Text>{pizza.size}cm</Text>
                  <Text>{pizza.slices} fatias - {pizza.flavours} sabores</Text>
                </Box>
              </VStack>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default ChoosePizzaSize
