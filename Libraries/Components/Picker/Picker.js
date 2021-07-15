/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as React from 'react';
import createElement from '../createElement';
import useMergeRefs from '../../modules/useMergeRefs';
import usePlatformMethods from '../../modules/usePlatformMethods';
import PickerItem from './PickerItem';
import StyleSheet from '../StyleSheet';


const Picker = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    enabled,
    onValueChange,
    selectedValue,
    style,
    testID,
    /* eslint-disable */
    itemStyle,
    mode,
    prompt,
    /* eslint-enable */
    ...other
  } = props;

  const hostRef = React.useRef(null);

  function handleChange(e) {
    const { selectedIndex, value } = e.target;
    if (onValueChange) {
      onValueChange(value, selectedIndex);
    }
  }

  // $FlowFixMe
  const supportedProps = {
    children,
    disabled: enabled === false ? true : undefined,
    onChange: handleChange,
    style: [styles.initial, style],
    testID,
    value: selectedValue,
    ...other
  };

  const platformMethodsRef = usePlatformMethods(supportedProps);

  const setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);

  supportedProps.ref = setRef;

  return createElement('select', supportedProps);
});

// $FlowFixMe
Picker.Item = PickerItem;

const styles = StyleSheet.create({
  initial: {
    fontFamily: 'System',
    fontSize: 'inherit',
    margin: 0
  }
});

export default Picker;
