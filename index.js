
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

 'use strict';

const invariant = require('invariant');
const warnOnce = require('./Libraries/Utilities/warnOnce');

module.exports = {
  // Components
  get AccessibilityInfo() {
    return require('./Libraries/Components/AccessibilityInfo/AccessibilityInfo')
      .default;
  },
  get ActivityIndicator() {
    return require('./Libraries/Components/ActivityIndicator/ActivityIndicator');
  },
  get Button() {
    return require('./Libraries/Components/Button');
  },
  get FlatList() {
    return require('./Libraries/Lists/FlatList');
  },
  get Image() {
    return require('./Libraries/Image/Image');
  },
  get ImageBackground() {
    return require('./Libraries/Image/ImageBackground');
  },
  get InputAccessoryView() {
    return require('./Libraries/Components/TextInput/InputAccessoryView');
  },
  get KeyboardAvoidingView() {
    return require('./Libraries/Components/Keyboard/KeyboardAvoidingView')
      .default;
  },
  get Modal() {
    return require('./Libraries/Modal/Modal');
  },
  get Pressable() {
    return require('./Libraries/Components/Pressable/Pressable').default;
  },
  get RefreshControl() {
    return require('./Libraries/Components/RefreshControl/RefreshControl');
  },
  get SafeAreaView() {
    return require('./Libraries/Components/SafeAreaView/SafeAreaView').default;
  },
  get ScrollView() {
    return require('./Libraries/Components/ScrollView/ScrollView');
  },
  get SectionList() {
    return require('./Libraries/Lists/SectionList').default;
  },
  get StatusBar() {
    return require('./Libraries/Components/StatusBar/StatusBar');
  },
  get Switch() {
    return require('./Libraries/Components/Switch/Switch').default;
  },
  get Text() {
    return require('./Libraries/Text/Text');
  },
  get TextInput() {
    return require('./Libraries/Components/TextInput/TextInput');
  },
  get Touchable() {
    return require('./Libraries/Components/Touchable/Touchable');
  },
  get TouchableHighlight() {
    return require('./Libraries/Components/Touchable/TouchableHighlight');
  },
  get TouchableNativeFeedback() {
    return require('./Libraries/Components/Touchable/TouchableNativeFeedback');
  },
  get TouchableOpacity() {
    return require('./Libraries/Components/Touchable/TouchableOpacity');
  },
  get TouchableWithoutFeedback() {
    return require('./Libraries/Components/Touchable/TouchableWithoutFeedback');
  },
  get View() {
    return require('./Libraries/Components/View/View');
  },
  get VirtualizedList() {
    return require('./Libraries/Lists/VirtualizedList');
  },
  get VirtualizedSectionList() {
    return require('./Libraries/Lists/VirtualizedSectionList');
  },

  // APIs
  get Alert() {
    return require('./Libraries/Alert').default;
  },
  get Animated() {
    return require('./Libraries/Animated/Animated').default;
  },
  get Appearance() {
    return require('./Libraries/Utilities/Appearance').default;
  },
  get AppRegistry() {
    return require('./Libraries/ReactNative/AppRegistry').default;
  },
  get AppState() {
    return require('./Libraries/AppState/AppState').default;
  },
  get BackHandler() {
    return require('./Libraries/Utilities/BackHandler').default;
  },
  get DeviceInfo() {
    return require('./Libraries/Utilities/DeviceInfo').default;
  },
  get DevSettings() {
    return require('./Libraries/Utilities/DevSettings').default;
  },
  get Dimensions() {
    return require('./Libraries/Utilities/Dimensions').default;
  },
  get Easing() {
    return require('./Libraries/Animated/Easing').default;
  },
  get findNodeHandle() {
    return require('./Libraries/Renderer/shims/ReactNative').findNodeHandle;
  },
  get I18nManager() {
    return require('./Libraries/ReactNative/I18nManager').default;
  },
  get InteractionManager() {
    return require('./Libraries/Interaction/InteractionManager').default;
  },
  get Keyboard() {
    return require('./Libraries/Components/Keyboard/Keyboard').default;
  },
  get LayoutAnimation() {
    return require('./Libraries/LayoutAnimation/LayoutAnimation').default;
  },
  get Linking() {
    return require('./Libraries/Linking/Linking').default;
  },
  get LogBox() {
    return require('./Libraries/LogBox/LogBox').default;
  },
  get NativeEventEmitter() {
    return require('./Libraries/EventEmitter/NativeEventEmitter').default;
  },
  get Networking() {
    return require('./Libraries/Network/RCTNetworking').default;
  },
  get PanResponder() {
    return require('./Libraries/Interaction/PanResponder').default;
  },
  get PixelRatio() {
    return require('./Libraries/Utilities/PixelRatio').default;
  },
  get Settings() {
    return require('./Libraries/Settings/Settings').default;
  },
  get Share() {
    return require('./Libraries/Share/Share').default;
  },
  get StyleSheet() {
    return require('./Libraries/StyleSheet/StyleSheet').default;
  },
  get Systrace() {
    return require('./Libraries/Performance/Systrace').default;
  },
  get UIManager() {
    return require('./Libraries/ReactNative/UIManager').default;
  },
  get unstable_batchedUpdates() {
    return require('./Libraries/Renderer/shims/ReactNative')
      .unstable_batchedUpdates;
  },
  get useColorScheme() {
    return require('./Libraries/Utilities/useColorScheme').default;
  },
  get useWindowDimensions() {
    return require('./Libraries/Utilities/useWindowDimensions').default;
  },
  get UTFSequence() {
    return require('./Libraries/UTFSequence');
  },
  get Vibration() {
    return require('./Libraries/Vibration/Vibration');
  },
  get YellowBox() {
    return require('./Libraries/YellowBox/YellowBoxDeprecated');
  },

  // Plugins
  get DeviceEventEmitter() {
    return require('./Libraries/EventEmitter/RCTDeviceEventEmitter').default;
  },
  get NativeAppEventEmitter() {
    return require('./Libraries/EventEmitter/RCTNativeAppEventEmitter');
  },
  get NativeModules() {
    return require('./Libraries/BatchedBridge/NativeModules');
  },
  get Platform() {
    return require('./Libraries/Utilities/Platform').default;
  },
  get PlatformColor() {
    return require('./Libraries/StyleSheet/PlatformColorValueTypes')
      .PlatformColor;
  },
  get processColor() {
    return require('./Libraries/StyleSheet/processColor');
  },
  get requireNativeComponent() {
    return require('./Libraries/ReactNative/requireNativeComponent');
  },
  get RootTagContext() {
    return require('./Libraries/ReactNative/RootTag').RootTagContext;
  },
};
