import * as React from 'react';
import {
  Button,
  Center,
  ChevronLeftIcon,
  Heading,
  HStack,
  Image,
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
    <SafeAreaView style={{flex: 1}}>
      <Image 
          style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
          source={require('../../assets/images/form.jpg')}
          alt='green field with sun and with one person helping another'
        />
      <Button
        ml={3}
        mr={3}
        mt={10}
        mb={3}
        size="lg"
        colorScheme="error"
        onPress={() => handleSubmit()}>
        Logout
      </Button>
    </SafeAreaView>
  );
}
