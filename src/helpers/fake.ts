import pizzaCalabresa from '@/assets/pizza-calabresa.png'
import pizzaFrango from '@/assets/pizza-frango-catupiry.png'
import pizzaPrestigio from '@/assets/pizza-prestigio.jpg'

export const PizzaFlavours = [
  {
    id: '0',
    image: pizzaCalabresa,
    name: 'Calabresa',
    value: {
      0: 20,
      1: 30,
      2: 40,
    },
  },
  {
    id: '1',
    image: pizzaFrango,
    name: 'Frango com catupiry',
    value: {
      0: 25,
      1: 35,
      2: 45,
    },
  },
  {
    id: '2',
    image: pizzaPrestigio,
    name: 'Prestígio',
    value: {
      0: 23,
      1: 33,
      2: 43,
    },
  },
]

export const PizzaSizes = [
  { name: 'Pequena', size: 28, slices: 2, flavours: 1, id: '0' },
  { name: 'Média', size: 30, slices: 6, flavours: 2, id: '1' },
  { name: 'Grande', size: 32, slices: 6, flavours: 3, id: '2' },
]
