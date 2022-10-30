/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useToast } from "native-base";
import { Modalize } from 'react-native-modalize';
import CardProps from '../../models/card-props.model';
import Screen from '../../models/screen.model';
import LocaleService from '../../services/locale.service';
import BoardService from '../../services/board.service';
import CardContent from '../../components/card/content';
import CardList from '../../components/card/list';
import StorageService from '../../services/storage.service';
import { useUser } from '../../providers/user';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();
let storageService: StorageService;


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BoardScreen = ({ navigation }: Screen) => {

  const [cards, setCards]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<Omit<CardProps, 'onOpen'> | null>(null);

  storageService = new StorageService(useUser());
  const toast = useToast();
  const user: any = storageService.getUser();
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if (user?.email) {
      fetchCards(user, setCards, setLoading);
    }
  }, [user]);

  return (
    <>
      <Styled.Container>
        <CardList 
          loading={loading}
          boards={cards}
          onRefresh={() => onUpdateData(
            user, 
            toast, 
            modalizeRef, 
            setCards, 
            setLoading
          )}
          onCardOpen={(card: Omit<CardProps, 'onOpen'>) => onOpen(
            card, 
            setSelectedCard, 
            modalizeRef
          )}
        />
      </Styled.Container>
      <CardContent 
        modalRef={modalizeRef}
        selectedBoard={selectedCard}
        onUpdateData={() => onUpdateData(
          user, 
          toast, 
          modalizeRef, 
          setCards, 
          setLoading
        )}
      />
    </>
  );
}

export default BoardScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function fetchCards(user: any, setCards: any, setLoading: any) {
  const response = await boardService.getCards(user.email);

  setCards(response);
  setLoading(false);
}

async function onUpdateData(
  user: any, 
  toast: any, 
  modalizeRef: any, 
  setCards: any, 
  setLoading: any
) {
  toast.show({
    description: localeService.translate("UPDATING_CARDS"),
  });
  modalizeRef.current?.close();
  setLoading(true);
  
  const response = await boardService.getCards(user.user.email);
  
  setCards(response);
  setLoading(false);
}

function onOpen(card: Omit<CardProps, 'onOpen'>, setSelectedCard: any, modalizeRef: any) {
  setSelectedCard(card);
  modalizeRef.current?.open();
}
