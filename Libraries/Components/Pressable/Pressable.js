/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import * as React from 'react';
import { forwardRef, memo, useMemo, useState, useRef } from 'react';
import useMergeRefs from '../../modules/useMergeRefs';
import useHover from '../../modules/useHover';
import usePressEvents from '../../modules/usePressEvents';
import StyleSheet from '../StyleSheet';
import View from '../View/View';

/**
 * Component used to build display components that should respond to whether the
 * component is currently pressed or not.
 */
function Pressable(props, forwardedRef) {
  const {
    children,
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    focusable,
    onBlur,
    onContextMenu,
    onFocus,
    onHoverIn,
    onHoverOut,
    onKeyDown,
    onLongPress,
    onPress,
    onPressMove,
    onPressIn,
    onPressOut,
    style,
    testOnly_hovered,
    testOnly_pressed,
    ...rest
  } = props;

  const [hovered, setHovered] = useForceableState(testOnly_hovered === true);
  const [focused, setFocused] = useForceableState(false);
  const [pressed, setPressed] = useForceableState(testOnly_pressed === true);

  const hostRef = useRef(null);
  const setRef = useMergeRefs(forwardedRef, hostRef);

  const pressConfig = useMemo(
    () => ({
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressChange: setPressed,
      onPressStart: onPressIn,
      onPressMove,
      onPressEnd: onPressOut
    }),
    [
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressIn,
      onPressMove,
      onPressOut,
      setPressed
    ]
  );

  const pressEventHandlers = usePressEvents(hostRef, pressConfig);

  const { onContextMenu: onContextMenuPress, onKeyDown: onKeyDownPress } = pressEventHandlers;

  useHover(hostRef, {
    contain: true,
    disabled,
    onHoverChange: setHovered,
    onHoverStart: onHoverIn,
    onHoverEnd: onHoverOut
  });

  const interactionState = { hovered, focused, pressed };

  const blurHandler = React.useCallback(
    (e) => {
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(false);
        if (onBlur != null) {
          onBlur(e);
        }
      }
    },
    [hostRef, setFocused, onBlur]
  );

  const focusHandler = React.useCallback(
    (e) => {
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(true);
        if (onFocus != null) {
          onFocus(e);
        }
      }
    },
    [hostRef, setFocused, onFocus]
  );

  const contextMenuHandler = React.useCallback(
    (e) => {
      if (onContextMenuPress != null) {
        onContextMenuPress(e);
      }
      if (onContextMenu != null) {
        onContextMenu(e);
      }
    },
    [onContextMenu, onContextMenuPress]
  );

  const keyDownHandler = React.useCallback(
    (e) => {
      if (onKeyDownPress != null) {
        onKeyDownPress(e);
      }
      if (onKeyDown != null) {
        onKeyDown(e);
      }
    },
    [onKeyDown, onKeyDownPress]
  );

  return (
    <View
      {...rest}
      {...pressEventHandlers}
      accessibilityDisabled={disabled}
      focusable={!disabled && focusable !== false}
      onBlur={blurHandler}
      onContextMenu={contextMenuHandler}
      onFocus={focusHandler}
      onKeyDown={keyDownHandler}
      ref={setRef}
      style={[
        !disabled && styles.root,
        typeof style === 'function' ? style(interactionState) : style
      ]}
    >
      {typeof children === 'function' ? children(interactionState) : children}
    </View>
  );
}

function useForceableState(forced) {
  const [bool, setBool] = useState(false);
  return [bool || forced, setBool];
}

const styles = StyleSheet.create({
  root: {
    cursor: 'pointer',
    touchAction: 'manipulation'
  }
});

const MemoedPressable = memo(forwardRef(Pressable));
MemoedPressable.displayName = 'Pressable';

export default (MemoedPressable);
