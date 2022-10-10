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
import {Card} from '../../components/card/Card';
import {Modalize} from 'react-native-modalize';
import {BottomDrawer} from '../../components/bottomDrawer/BottomDrawer';
import {useUser} from '../../providers/user';
import ICard from '../../models/ICard';
import colors from '../../resources/colors';
import LocaleService from '../../services/locale.service';

const localeService = new LocaleService();

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
      description: localeService.translate("UPDATING_CARDS"),
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
        <ScrollView>
          {!loading && boards.length === 0 ? (
            <Center mt={16}>
              <Heading textAlign="center" size="md">
              {localeService.translate("NO_BOARDS")}
              </Heading>
              <Button
                mt={3}
                mb={3}
                size="sm"
                colorScheme="error"
                onPress={() => onUpdateData()}>
                {localeService.translate("REFRESH")}
              </Button>
            </Center>
          ) : null}
          {loading ? (
            <Spinner size="lg" color={colors.primary} mt={20} />
          ) : (
            <VStack space={2} mt={4} alignItems="center">
              {boards.map((board, i) => {
                return <Card onOpen={onOpen} key={i} {...board} />;
              })}
            </VStack>
          )}
        </ScrollView>
      </SafeAreaView>
      <Modalize ref={modalizeRef} modalTopOffset={90} >
        {selectedBoard && (
          <BottomDrawer onUpdateData={onUpdateData} board={selectedBoard} />
        )}
      </Modalize>
    </>
  );
}
