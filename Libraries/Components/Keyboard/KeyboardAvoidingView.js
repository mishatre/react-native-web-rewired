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
import View from '../View/View';

class KeyboardAvoidingView extends React.Component {
  frame = null;

  relativeKeyboardHeight(keyboardFrame) {
    const frame = this.frame;
    if (!frame || !keyboardFrame) {
      return 0;
    }
    const keyboardY = keyboardFrame.screenY - (this.props.keyboardVerticalOffset || 0);
    return Math.max(frame.y + frame.height - keyboardY, 0);
  }

  onKeyboardChange(event) {}

  onLayout(event) {
    this.frame = event.nativeEvent.layout;
  };

  render() {
    const {
      /* eslint-disable */
      behavior,
      contentContainerStyle,
      keyboardVerticalOffset,
      /* eslint-enable */
      ...rest
    } = this.props;

    return <View onLayout={this.onLayout} {...rest} />;
  }
}

export default KeyboardAvoidingView;
