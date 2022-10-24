/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ApiConfig from '../config/api.config';
import AsyncStorage from '@react-native-community/async-storage';
import axios, { AxiosInstance } from 'axios';


/**
 * Responsible for providing translations according to some language.
 */
abstract class Service {
  
  // --------------------------------------------------------------------------
  //         Attributes
  // --------------------------------------------------------------------------
  protected readonly remoteRequest: AxiosInstance;


  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  public constructor() {
    this.remoteRequest = axios.create({
      baseURL: ApiConfig.BASE_URL,
      timeout: ApiConfig.REQUEST_TIMEOUT
    });

    this.remoteRequest.interceptors.request.use(
      async (config: {headers?: {authorization: string}}) => {
        const token = await AsyncStorage.getItem('cookie');
        if (token) {
          if (config.headers) {
            config.headers.authorization = token;
          }
          else {
            config.headers = { authorization: token };
          }
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }
}

export default Service;
