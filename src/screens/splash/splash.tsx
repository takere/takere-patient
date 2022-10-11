import * as React from 'react';
import {Center, Spinner} from 'native-base';
import {useEffect} from 'react';
import {useUser} from '../../providers/user';
import LocaleService from '../../services/locale.service';

const localeService = new LocaleService();

export function SplashScreen({navigation}: {navigation: any}) {
  const user = useUser();

  useEffect(() => {
    if (!user?.signed && !user?.initialized) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  }, [user?.initialized, user?.user]);

  return (
    <Center flex={1} px="3">
      <Spinner
        accessibilityLabel={localeService.translate("LOADING_POSTS")}
        size="lg"
        color="warning.500"
      />
    </Center>
  );
}
