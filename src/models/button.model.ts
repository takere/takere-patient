/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface Button {
  title: string, 
  onPress: () => void,
  isLoading?: boolean,
  isDisabled?: boolean
}

export default Button;
