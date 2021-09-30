import * as React from 'react';
import {Center, Spinner} from 'native-base';
import {useEffect} from 'react';
import {useUser} from '../../context/user';

export function SplashScreen({navigation}: {navigation: any}) {
  const user = useUser();

  useEffect(() => {
    if (!user?.signed && user?.initialized) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  }, [user?.initialized, user?.user]);

  return (
    <Center flex={1} px="3">
      <Spinner
        accessibilityLabel="Loading posts"
        size="lg"
        color="warning.500"
      />
    </Center>
  );
}
