import { Platform } from 'react-native';


export function patchWebStorage() {
if (Platform.OS === 'web') {
console.warn("Applying WebStorage patch…");
window.indexedDB = null; // Force RAM storage instead of IndexedDB
}
}
