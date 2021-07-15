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
import StyleSheet from '../StyleSheet';
import TouchableOpacity from './Touchable/TouchableOpacity';
import Text from '../Text/Text';

const Button = React.forwardRef((props, forwardedRef) => {
  const { accessibilityLabel, color, disabled, onPress, testID, title } = props;

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      disabled={disabled}
      focusable={!disabled}
      onPress={onPress}
      ref={forwardedRef}
      style={[
        styles.button,
        color && { backgroundColor: color },
        disabled && styles.buttonDisabled
      ]}
      testID={testID}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
});

export default Button;