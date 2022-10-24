/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import Screen from '../../models/screen.model';
import LocaleService from '../../services/locale.service';
import ProgressService from '../../services/progress.service';
import StorageService from '../../services/storage.service';
import ScreenContent from '../../components/ScreenContent';
import ProgressList from '../../components/ProgressList';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const localeService = new LocaleService();
const progressService = new ProgressService();
const storageService = new StorageService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ProgressScreen = ({ navigation }: Screen) => {

  const [progress, setProgress]: any = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(setProgress, setLoading);
  }, []);

  return (
    <Styled.Container>
      <Styled.Background 
        source={require('../../assets/images/progress.jpg')}
        alt={localeService.translate("PROGRESS_IMAGE")}
      />
      <ScreenContent loading={loading}>
        <ProgressList progress={progress} />
      </ScreenContent>
    </Styled.Container>
  );
}

export default ProgressScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function getData(setProgress: any, setLoading: any) {
  const response = await progressService.getMyProgress(storageService.getEmail());
  
  setProgress(response);
  setLoading(false);
}