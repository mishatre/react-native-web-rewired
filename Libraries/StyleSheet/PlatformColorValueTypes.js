/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
 
 export const PlatformColor = (...names: Array<string>): ColorValue => {
   return {semantic: names};
 }; 
 export const normalizeColorObject = (
   color: NativeColorValue,
 ): ?ProcessedColorValue => {
    return color;
 };
 
 export const processColorObject = (
   color: NativeColorValue,
 ): ?NativeColorValue => {
    return color;
 };
 