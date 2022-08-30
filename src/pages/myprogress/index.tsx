import * as React from 'react';
import {
  Avatar, Box, Button,
  Center,
  Heading,
  HStack,
  Progress,
  ScrollView,
  Text,
  useToast,
  Spinner,
  VStack
} from "native-base";
import {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useUser} from '../../context/user';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Requests} from '../../services/axios/remoteRequests';
import colors from '../../resources/colors';

export function MyProgressScreen({navigation}: {navigation: any}) {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const user = useUser();

  useEffect(() => {
    const getData = async () => {
      const response = await new Requests().getMyProgress(user.user.id);
      setProgress(response);
      setLoading(false);
    };
    
    getData();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {loading &&
          <Spinner size="lg" color={colors.yogurt} mt={20} />
        }
        {!loading &&
          <ScrollView marginX={3}>
            {progress.map((item: any, index: number) => (
              <FlowProgress flow={item.flow} key={index} />
            ))}
          </ScrollView>
        }
      </SafeAreaView>
    </>
  );
}

const FlowProgress = ({ flow }: any) => (
  <Box mt={5}>
    <Heading size="md" ml={3}>
      { flow.name }
    </Heading>
    <VStack space={2} mt={3}>
      {flow.progress.map((item: any, index: number) => (
        <ProgressCard
          key={index}
          bgColor={item.node.bgColor}
          name={item.node.type}
          completed={item.completed}
          remaining={item.total}
        />
      ))}
    </VStack>
  </Box>
);

const ProgressCard = ({ name, completed, remaining, bgColor }: any) => (
  <HStack p="5" rounded="8" bgColor={bgColor} justifyContent='space-between'>
    <HStack justifyContent='center'>
      <Box justifyContent='center' alignItems='center'>
        <Icon name='help' size={30} color="#fff" />
      </Box>
      <Text fontSize={18} color="cyan.50" fontWeight="medium" ml={5}>
        { name }
      </Text>
      <Text fontSize={18} color="cyan.50" fontWeight="medium" ml={5}>
        ({completed}/{remaining})
      </Text>
    </HStack>
    <Center w="60%">
      <Box w="90%" maxW="140">
        <Progress size="md" bg='coolGray.300' _filledTrack={{ bg: colors.success }} value={(completed/remaining) * 100} />
      </Box>
    </Center>
  </HStack>
);
