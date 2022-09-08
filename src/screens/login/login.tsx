import * as React from 'react';
import {
  Button,
  Heading,
  Input,
} from 'native-base';
import {useState} from 'react';
import {useUser} from '../../providers/user';
import {SafeAreaView} from 'react-native';

export function LoginScreen({navigation}: {navigation: any}) {
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmailChange = (inputValue: any) => {
    setEmail(inputValue);
  };
  const handlePasswordChange = (inputValue: any) => {
    setPassword(inputValue);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const status = await user.login(email, password);
    if (status) {
      navigation.navigate('Home');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <Heading size="xl" ml={3} mt={5} color="muted.800">
        Email
      </Heading>
      <Heading size="sm" ml={3} mt={1} color="muted.400">
        Digite aqui seu email
      </Heading>
      <Input
        value={email}
        onChangeText={handleEmailChange}
        ml={3}
        mr={3}
        mt={5}
        size="2xl"
        placeholder="joao@joao.com"
      />
      <Heading size="xl" ml={3} mt={10} color="muted.800">
        Palavra chave
      </Heading>
      <Heading size="sm" ml={3} mt={1} color="muted.400">
        Digite aqui sua senha
      </Heading>
      <Input
        value={password}
        onChangeText={handlePasswordChange}
        ml={3}
        mr={3}
        mt={5}
        size="2xl"
        type="password"
      />
      <Button
        isLoading={loading}
        isDisabled={loading}
        ml={3}
        mr={3}
        mt={10}
        mb={3}
        size="lg"
        colorScheme="success"
        onPress={() => handleSubmit()}>
        Entrar
      </Button>
    </SafeAreaView>
  );
}
