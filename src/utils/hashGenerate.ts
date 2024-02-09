import CryptoJS from 'crypto-js';

export function generateObjectHash(obj) {
    const jsonString = JSON.stringify(obj);
    const hash = CryptoJS.SHA256(jsonString).toString();
    return hash;
}
