import {Button} from 'native-base';
import * as React from 'react';
import {useRef, useState} from 'react';
import IHandleSubmit from '../../models/IHandleSubmit';

const HandleSubmit = ({onClick}: IHandleSubmit) => {
  const [value, setValue] = useState<boolean>(false);
  const handleSubmit = () => {
    setValue(true);
    onClick();
  };

  return (
    <>
      <Button
        isLoading={value}
        isDisabled={value}
        size="lg"
        colorScheme="success"
        onPress={() => handleSubmit()}>
        Concluir
      </Button>
    </>
  );
};

export default HandleSubmit;
