import * as React from 'react';
import {
  Button,
  Center,
  ChevronLeftIcon,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Spinner,
} from 'native-base';
import {useUser} from '../../context/user';
import {SafeAreaView} from 'react-native';

export function ProfileScreen({navigation}: {navigation: any}) {
  const user = useUser();

  const handleSubmit = async () => {
    await user.logout();
    navigation.navigate('Splash');
  };

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <HStack space={1} mt={2} alignItems="center">
          <ChevronLeftIcon size="8" color="muted.800" />
          <Heading size="md" color="muted.800">
            Voltar
          </Heading>
        </HStack>
      </Pressable>
      <Button
        ml={3}
        mr={3}
        mt={10}
        mb={3}
        size="lg"
        colorScheme="error"
        onPress={() => handleSubmit()}>
        Sair
      </Button>
    </SafeAreaView>
  );
}
