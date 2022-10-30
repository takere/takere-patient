/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as Styled from './styled';
import { Heading, Progress, VStack } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/themes';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ProgressList = ({ progress }: any) => (
  <Styled.List>
    {progress.map((item: any, index: number) => (
      <ProgressItem flow={item.flow} key={index} />
    ))}
  </Styled.List>
);

export default ProgressList;

const ProgressItem = ({ flow }: any) => (
  <Styled.CardsArea>
    <Styled.CarePlanName size="md">
      { flow.name }
    </Styled.CarePlanName>
    <Styled.CardList>
      {flow.nodes.map((item: any, index: number) => (
        <ProgressCard
          key={index}
          icon={item.node.icon}
          bgColor={item.node.color}
          name={item.node.name.toUpperCase()}
          completed={item.completed}
          remaining={item.total}
        />
      ))}
    </Styled.CardList>
  </Styled.CardsArea>
);

const ProgressCard = ({ name, icon, completed, remaining, bgColor }: any) => (
  <Styled.Card bgColor={bgColor}>
    <Styled.IconArea justifyContent='center' alignItems='center' mr={5}>
      <Icon name={icon} size={35} color="#fff" />
    </Styled.IconArea>
    <VStack>
      <Styled.CardHeader>
        <Styled.CardTitle>
          { name }
        </Styled.CardTitle>
      </Styled.CardHeader>
      <Styled.CardBody>
        <Styled.ProgressBarContainer>
          <Styled.ProgressBarArea>
            <Progress 
              size="md" 
              bg='coolGray.300' 
              _filledTrack={{ bg: theme.success }} 
              value={(completed/remaining) * 100} 
            />
          </Styled.ProgressBarArea>
        </Styled.ProgressBarContainer>
        <Styled.ProgressRatio>
          ({completed}/{remaining})
        </Styled.ProgressRatio>
      </Styled.CardBody>
    </VStack>
  </Styled.Card>
);