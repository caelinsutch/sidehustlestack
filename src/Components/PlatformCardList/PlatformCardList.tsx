import React from 'react';
import { PlatformData } from '@Screens/HomeScreen';
import { BoxProps, Flex, VStack } from '@chakra-ui/react';
import { PlatformCard } from '@Components/index';

export type PlatformCardListProps = {
  cards: PlatformData[];
} & BoxProps;

const PlatformCardList: React.FC<PlatformCardListProps> = ({
  cards,
  ...props
}) => (
  <Flex flexDir="row" justifyContent="space-around" {...props}>
    {cards.map((card, index) => (
      <PlatformCard
        card={card}
        order={card.votes}
        key={card.title + index}
        w="30%"
        minWidth="200px"
        h="auto"
      />
    ))}
  </Flex>
);

export default PlatformCardList;