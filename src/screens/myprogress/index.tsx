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
  VStack,
  Image
} from "native-base";
import {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useUser} from '../../providers/user';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/themes';
import LocaleService from '../../services/locale.service';
import ProgressService from '../../services/progress.service';

const localeService = new LocaleService();
const progressService = new ProgressService();

export function MyProgressScreen({navigation}: {navigation: any}) {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const user = useUser();

  useEffect(() => {
    const getData = async () => {
      const response = await progressService.getMyProgress(user.user.email);
      setProgress(response);
      setLoading(false);
    };
    
    getData();
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Image 
          style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
          source={require('../../assets/images/progress.jpg')}
          alt={localeService.translate("PROGRESS_IMAGE")}
        />
        {loading &&
          <Spinner size="lg" color={theme.primary} mt={20} />
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
  <Box mt={5} borderRadius={10} p={5} backgroundColor='rgba(0,0,0,0.3)'>
    <Heading size="md" ml={3} color={theme.light}>
      { flow.name }
    </Heading>
    <VStack space={2} mt={3}>
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
    </VStack>
  </Box>
);

const ProgressCard = ({ name, icon, completed, remaining, bgColor }: any) => (
  <HStack p="5" rounded="8" bgColor={bgColor}>
    <Box justifyContent='center' alignItems='center' mr={5}>
      <Icon name={icon} size={35} color="#fff" />
    </Box>
    <VStack>
      <HStack justifyContent='flex-start'>
        <Text fontSize={18} color="cyan.50" fontWeight="medium">
          { name }
        </Text>
      </HStack>
      <HStack justifyContent='space-between'>
        <Center w="70%">
          <Box w="100%" maxW="240">
            <Progress size="md" bg='coolGray.300' _filledTrack={{ bg: theme.success }} value={(completed/remaining) * 100} />
          </Box>
        </Center>
        <Text fontSize={14} color="cyan.50" fontWeight="medium">
          ({completed}/{remaining})
        </Text>
      </HStack>
    </VStack>
  </HStack>
);
