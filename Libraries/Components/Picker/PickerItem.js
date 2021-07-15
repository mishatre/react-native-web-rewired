/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

import createElement from '../createElement';

export default function PickerItem(props) {
  const { color, label, testID, value } = props;
  const style = { color };
  return createElement('option', { style, testID, value }, label);
}
