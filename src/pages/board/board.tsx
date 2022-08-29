import * as React from 'react';
import {
  Avatar, Button,
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Spinner,
  useToast,
  VStack
} from "native-base";
import {useEffect, useRef, useState} from 'react';
import {Requests} from '../../services/axios/remoteRequests';
import {SafeAreaView} from 'react-native';
import {Card, ICard} from '../../components/card/Card';
import {Modalize} from 'react-native-modalize';
import {BottomDrawer} from '../../components/bottomDrawer/BottomDrawer';
import {useUser} from '../../context/user';

export function BoardScreen({navigation}: {navigation: any}) {
  const toast = useToast();
  const user = useUser();
  const modalizeRef = useRef<Modalize>(null);
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState<Omit<
    ICard,
    'onOpen'
  > | null>(null);

  const onOpen = (data: Omit<ICard, 'onOpen'>) => {
    setSelectedBoard(data);
    modalizeRef.current?.open();
  };

  const onUpdateData = async () => {
    toast.show({
      description: 'Atualizando cards',
    });
    modalizeRef.current?.close();
    setLoading(true);
    const response = await new Requests().getBoards(user.user.email);
    setBoards(response);
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await new Requests().getBoards(user.user.email);
      setBoards(response);
      setLoading(false);
    };

    if (user?.user?.email) {
      getData();
    }
  }, [user.user]);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Heading size="lg" ml={3} mb={5}>
          Takere APP
        </Heading>
        <ScrollView>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <HStack space={2} alignItems="center">
              <Avatar
                ml={3}
                bg="cyan.500"
                source={{
                  uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                }}>
                {user.user?.data?.firstName.substring(0, 2).toUpperCase()}
              </Avatar>
              <Heading size="lg" ml={3}>
                {user.user?.data?.firstName}
              </Heading>
            </HStack>
          </Pressable>
          {!loading && boards.length === 0 ? (
            <Center mt={16}>
              <Heading textAlign="center" size="md">
                não encontrei nada :(
              </Heading>
              <Button
                mt={3}
                mb={3}
                size="sm"
                colorScheme="error"
                onPress={() => onUpdateData()}>
                Tentar novamente
              </Button>
            </Center>
          ) : null}
          {loading ? (
            <Spinner size="lg" color="warning.500" />
          ) : (
            <VStack space={2} mt={4} alignItems="center">
              {boards.map((board, i) => {
                return <Card onOpen={onOpen} key={i} {...board} />;
              })}
            </VStack>
          )}
        </ScrollView>
      </SafeAreaView>
      <Modalize ref={modalizeRef} >
        {selectedBoard && (
          <BottomDrawer onUpdateData={onUpdateData} board={selectedBoard} />
        )}
      </Modalize>
    </>
  );
}