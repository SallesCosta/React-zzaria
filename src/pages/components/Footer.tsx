import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, HStack, VStack } from '@chakra-ui/react'

import { OrderList } from './orderList'
import { Container, AnimatedText, Bold, H4 } from '@/ui'

import { PizzaSize } from '@/contexts/orderContext'
import { useLang } from '@/contexts'
import langSource from '@/lang/langSource.json'
import { CONFIRMATION, singleOrPlural, WithRouter } from '@/helpers'
import { InfoAddress } from '@/pages/components/infoAddress'

type State = {
  size: PizzaSize;
  flavours: string[];
};

type buttonsProps = {
  buttons: {
    back: {
      children: string;
      variant?: string;
    };
    action: {
      onClick?: () => void;
      isDisabled?: boolean;
      state: State | null;
      to: string;
      children: string;
      variant?: string;
    };
  };
};

const Footer = (buttons: buttonsProps) => {
  const { language } = useLang()
  const location = useLocation()
  const navigate = useNavigate()

  const { size, flavours } = location.state

  const quantity = singleOrPlural(size.flavours, 'sabor', 'sabores')

  const backPage = () => navigate(-1)

  const l = langSource[language]
  return (
    <Container
      as='footer'
      justifyContent='space-between'
      h='200px'
      boxShadow='esc-shadow-lg-top'
    >
      <VStack alignItems='left' h='100%'>
        <H4>Monte sua pizza</H4>
        <HStack>
          <AnimatedText>
            <Bold>Size: </Bold>
            {size.name} ({size.flvours} {quantity} and {size.slices} slices)
          </AnimatedText>
        </HStack>

        {flavours && (
          <HStack>
            <Bold>
              {singleOrPlural(
                flavours.length,
                `${l.flavor}`,
                `${l.flavors}`,
              )}
            </Bold>
            <AnimatedText>
              {flavours.map((name: any) => name.name.name).join(', ')}
            </AnimatedText>
          </HStack>
        )}
      </VStack>
      <VStack h='100%' alignItems='left'>
        <H4>Your package</H4>
        <Box
          w='500px'
          overflow='hidden'
          sx={{
            '& > :first-of-type': { marginBottom: '10px' },
            '::-webkit-scrollbar': {
              width: '0px',
              background: 'transparent',
            },
          }}
          overflowY='scroll'
        >
          <OrderList />
        </Box>
      </VStack>
      <Box>
        <Button onClick={backPage} {...buttons.buttons.back} />
        <Button {...buttons.buttons.action}>
          <Link
            to={buttons.buttons.action.to}
            state={buttons.buttons.action.state}
          >
            {buttons.buttons.action.children}
          </Link>
        </Button>
      </Box>
    </Container>
  )
}

export default WithRouter(Footer)

export const CheckoutFooter = () => {
  const { language } = useLang()
  const l = langSource[language]
  return (
    <Container
      as='footer'
      h='200px'
      maxH='200px'
      boxShadow='esc-shadow-lg-top'
      overflowY='hidden'
    >
      <HStack
        w='960px' m='auto'
        justifyContent='space-between'
      >
        <InfoAddress />
        <Button variant='primary'>
          <AnimatedText>
            <Link to={CONFIRMATION}>{l.confirmData}</Link>
          </AnimatedText>
        </Button>
      </HStack>
    </Container>
  )
}
