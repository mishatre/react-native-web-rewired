
import { registerAsset as register, getAssetByID as getAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';

export function registerAsset(asset) {
    return register(asset);
}

export function getAssetByID(assetId) {
    return getAsset(assetId);
}