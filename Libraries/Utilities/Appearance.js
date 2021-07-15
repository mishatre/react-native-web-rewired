/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

function getQuery() {
  return canUseDOM && window.matchMedia != null
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
}

const query = getQuery();
const listenerMapping = new WeakMap();

const Appearance = {
  getColorScheme() {
    return query && query.matches ? 'dark' : 'light';
  },

  addChangeListener(listener) {
    let mappedListener = listenerMapping.get(listener);
    if (!mappedListener) {
      mappedListener = ({ matches }) => {
        listener({ colorScheme: matches ? 'dark' : 'light' });
      };
      listenerMapping.set(listener, mappedListener);
    }
    if (query) {
      query.addListener(mappedListener);
    }
  },

  removeChangeListener(listener) {
    const mappedListener = listenerMapping.get(listener);
    if (mappedListener) {
      if (query) {
        query.removeListener(mappedListener);
      }
      listenerMapping.delete(listener);
    }
  }
};

export default Appearance;
