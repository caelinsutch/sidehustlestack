import React from 'react';
import { Icon, Text, VStack } from '@chakra-ui/react';
import { IoTriangle } from 'react-icons/io5';

export type VoteStatus = 'up' | 'neutral' | 'down';

export type VoteIconsProps = {
  status?: VoteStatus;
  upvotes: number;
  onClick: (status: VoteStatus) => void;
};

const VoteIcons: React.FC<VoteIconsProps> = ({
  status = 'neutral',
  upvotes,
  onClick,
}) => (
  <VStack
    alignContent="center"
    justifyContent="space-between"
    spacing="8px"
    w="17px"
    mr="5px"
  >
    <Icon
      as={IoTriangle}
      color={status === 'up' ? 'orange.300' : 'gray.200'}
      onClick={() => onClick('up')}
      cursor="pointer"
      _hover={{
        color: status === 'up' ? 'orange.400' : 'gray.300',
      }}
    />
    <Text
      userSelect="none"
      color="black"
      fontSize="16px"
      lineHeight="80%"
      cursor="pointer"
      onClick={() => onClick('neutral')}
    >{`${upvotes}`}</Text>
    <Icon
      as={IoTriangle}
      color={status === 'down' ? 'red.300' : 'gray.200'}
      onClick={() => onClick('down')}
      transform="rotate(180deg)"
      cursor="pointer"
      _hover={{
        color: status === 'down' ? 'red.400' : 'gray.300',
      }}
    />
  </VStack>
);

export default VoteIcons;
