/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AsyncStorage from "@react-native-community/async-storage";
import Service from "./service";
import StorageService from "./storage.service";


/**
 * Responsible for managing authentication.
 */
class AuthService extends Service {

  // --------------------------------------------------------------------------
  //         Attributes
  // --------------------------------------------------------------------------
  private readonly storageService: StorageService;

  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
    this.storageService = new StorageService();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public async signIn(email: string, password: string): Promise<boolean> {
    this.storageService.setLoading(true);

    const response: any = await this.remoteRequest.post('users/login', {
      email, 
      password
    });

    try {
      if (response.token) {
        await this.storageService.storeUser(response);

        return true;
      } 
      else {
        this.storageService.setLoading(false);
        return false;
      }
    } 
    catch (e) {
      console.log(e);
      this.storageService.setLoading(false); 

      return false;
    }
  }

  public async signOut() {
    await AsyncStorage.removeItem('cookie');

    this.storageService.reset();
  }
}

export default AuthService;