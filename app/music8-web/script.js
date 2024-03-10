async function encrypt(text, key) {
    const encodedText = new TextEncoder().encode(text);
    const encodedKey = await window.crypto.subtle.importKey(
        'raw', 
        new TextEncoder().encode(key), 
        {name: 'AES-CBC'}, 
        false, 
        ['encrypt']
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const encrypted = await window.crypto.subtle.encrypt(
        {name: 'AES-CBC', iv}, 
        encodedKey, 
        encodedText
    );

    // Create a new Uint8Array to store IV and encrypted data
    const combinedData = new Uint8Array(iv.length + encrypted.byteLength);
    combinedData.set(iv, 0);
    combinedData.set(new Uint8Array(encrypted), iv.length);

    // Convert Uint8Array to Base64 string
    const base64String = btoa(String.fromCharCode.apply(null, combinedData));

    return base64String;
}

async function decrypt(encryptedDataString, key) {
    // Convert Base64 string to binary string
    const binaryString = atob(encryptedDataString);
    
    // Convert binary string to Uint8Array
    const encryptedData = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        encryptedData[i] = binaryString.charCodeAt(i);
    }

    const iv = encryptedData.slice(0, 16);
    const encryptedBytes = encryptedData.slice(16);

    const encodedKey = await window.crypto.subtle.importKey(
        'raw', 
        new TextEncoder().encode(key), 
        {name: 'AES-CBC'}, 
        false, 
        ['decrypt']
    );

    const decrypted = await window.crypto.subtle.decrypt(
        {name: 'AES-CBC', iv}, 
        encodedKey, 
        encryptedBytes
    );

    return new TextDecoder().decode(decrypted);
}


document.addEventListener("DOMContentLoaded", async () => {
    const secretText = `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`;

    try {
        document.body.innerHTML = await decrypt(secretText, prompt("Please enter security key"));
    } catch(err) {
        document.writeln(err);
    }
});