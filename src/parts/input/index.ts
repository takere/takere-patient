/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import CheckboxInput from "./CheckboxInput";
import InputFactoryException from "../exception/input-factory.exception";
import NumericInput from "./NumericInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const inputs = {
  TEXT: TextInput,
  TEXT_AREA: TextAreaInput,
  RADIO: RadioInput,
  CHECKBOX: CheckboxInput,
  SELECT: SelectInput,
  NUMERIC: NumericInput,
  NUMBER: NumericInput
};

export default inputs;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
export function inputFactory(type: string, props: any) {
  if (inputs[type.toUpperCase() as keyof typeof inputs] === undefined) {
    throw new InputFactoryException(`There is no support for ${type}`);
  }

  return React.createElement(
    inputs[type.toUpperCase() as keyof typeof inputs], 
    { ...props }
  );
}
