// @ts-nocheck

export async function readFileToBuffer(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const arrayBuffer = event.target?.result;
      if (arrayBuffer) {
        const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer);
        resolve(uint8Array);
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };

    fileReader.readAsArrayBuffer(file);
  });
}

export const toCamelCase = (str: string) => {
  return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
};

export const transformKeysToCamelCase = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map((item: any) => transformKeysToCamelCase(item));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = toCamelCase(key);
      acc[camelCaseKey] = transformKeysToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};
