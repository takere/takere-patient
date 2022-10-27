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
import { useUser } from '../../providers/user';
import ICard from '../../models/ICard';
import Screen from '../../models/screen.model';
import LocaleService from '../../services/locale.service';
import BoardService from '../../services/board.service';
import CardContent from '../../components/card/content';
import CardList from '../../components/card/list';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const boardService = new BoardService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BoardScreen = ({ navigation }: Screen) => {

  const [cards, setCards]: any = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<Omit<ICard, 'onOpen'> | null>(null);

  const toast = useToast();
  const user: any = useUser();
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    if (user?.user?.email) {
      fetchCards(user, setCards, setLoading);
    }
  }, [user.user]);

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
          onCardOpen={(card: Omit<ICard, 'onOpen'>) => onOpen(
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
  const response = await boardService.getCards(user.user.email);

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

function onOpen(card: Omit<ICard, 'onOpen'>, setSelectedCard: any, modalizeRef: any) {
  setSelectedCard(card);
  modalizeRef.current?.open();
}
