/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

 const path = require('path');
 const exclusionList = require('metro-config/src/defaults/exclusionList');
 
 module.exports = {
   watchFolders: [
     path.resolve(__dirname, 'web'),
   ],
   preferNativePlatform: false,
   resolver: {
     blockList: exclusionList([]),
     platforms: ['ios', 'android', 'web'],
   },
   transformer: {
     assetRegistryPath: 'react-native-web-rewired/Libraries/Image/AssetRegistry',
     getTransformOptions: async () => ({
       transform: {
         experimentalImportSupport: false,
         inlineRequires: true,
       },
     }),
   },
 };
 