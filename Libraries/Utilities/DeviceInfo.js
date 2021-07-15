/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import Dimensions from './Dimensions';

const DeviceInfo = {
  Dimensions: {
    get windowPhysicalPixels() {
      const { width, height, fontScale, scale } = Dimensions.get('window');
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    },
    get screenPhysicalPixels() {
      const { width, height, fontScale, scale } = Dimensions.get('screen');
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    }
  },

  get locale() {
    if (canUseDOM) {
      if (navigator.languages) {
        return navigator.languages[0];
      } else {
        return navigator.language;
      }
    }
  },

  get totalMemory() {
    // $FlowIssue deviceMemory not defined in navigator
    return canUseDOM ? navigator.deviceMemory : undefined;
  },

  get userAgent() {
    return canUseDOM ? navigator.userAgent : '';
  }
};

export default DeviceInfo;
