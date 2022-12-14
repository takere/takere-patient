/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface UserContextType {
  signed: boolean,
  user: any,
  isLoading: boolean,
  initialized: boolean,
  store: (response: any) => void,
  setLoading: (value: boolean) => void,
  reset: () => void
}

export default UserContextType;
