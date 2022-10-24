/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Service from "./service";
import { useUser } from '../providers/user';

/**
 * Responsible for managing local storage. 
 */
class StorageService extends Service {

  // --------------------------------------------------------------------------
  //         Attributes
  // --------------------------------------------------------------------------
  private readonly userProvider: any;

  
  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
    this.userProvider = useUser();
  }


  // --------------------------------------------------------------------------
  //         Methods
  // --------------------------------------------------------------------------
  public reset(): any {
    this.userProvider.reset();
  }

  public getEmail(): string {
    return this.userProvider.user.email;
  }

  public async storeUser(data: any) {
    await this.userProvider.store(data);
  }

  public setLoading(value: boolean) {
    this.userProvider.setLoading(value);
  }
}

export default StorageService;
