/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AsyncStorage from "@react-native-community/async-storage";
import UserDTO from "../dto/user.dto";
import Service from "./service";


/**
 * Responsible for managing authentication.
 */
class AuthService extends Service {
  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public async signIn(email: string, password: string): Promise<UserDTO> {
    const response = await this.remoteRequest.post('users/login', {email, password});

    return response.data;
  }

  public async signOut() {
    await AsyncStorage.removeItem('cookie');
  }
}

export default AuthService;
