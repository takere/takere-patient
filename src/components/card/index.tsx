/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { Box, Spacer } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';
import CardProps from '../../models/card-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const Card = ({
  id,
  name,
  description,
  node,
  finished,
  onOpen,
}: CardProps) => {
  return (
    <Styled.TouchableArea
      onPress={() => onOpen({name, description, finished, id, node})}
    >
      <Styled.Container>
        <Body node={node} finished={finished} />
        <CardIcon node={node} />
      </Styled.Container>
    </Styled.TouchableArea>
  );
};

export default Card;

const Body = ({ node, finished }: any) => (
  <Box>
    <Header node={node} finished={finished} />
    <Styled.Title>
      {node?.arguments[0]}
    </Styled.Title>
    <Styled.Subtitle>
      {node?.arguments[1]}
    </Styled.Subtitle>
  </Box>
);

const Header = ({ node, finished }: any) => (
  <Styled.Header>
    <Styled.Title>
      {node?.name.toUpperCase()}
    </Styled.Title>
    <Spacer />
    <Styled.Subtitle>
      {finished.at &&
        formatDistanceToNow(new Date(finished.at), {
          locale: ptBR,
        })}
    </Styled.Subtitle>
  </Styled.Header>
);

const CardIcon = ({ node }: any) => (
<Styled.IconContainer>
    <Icon name={node?.icon} size={30} color="#fff" />
  </Styled.IconContainer>
);

