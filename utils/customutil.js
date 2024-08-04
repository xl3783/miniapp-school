function flattenAttributes(obj) {
  // Base case: if obj is not an object, return it as is
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(flattenAttributes);
  }

  let flattened = {};

  // Iterate over the keys of the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // If the key is "attributes", merge its properties directly
      if (key === 'attributes') {
        let data = flattenAttributes(obj[key]);
        if (Array.isArray(data)) {
          return data;
        }
        Object.assign(flattened, data);
      } else if (Array.isArray(obj[key])) {
        // If the value is an array, recursively flatten each item
        flattened[key] = obj[key].map(flattenAttributes);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recursively flatten it
        flattened[key] = flattenAttributes(obj[key]);
      } else {
        // Otherwise, just copy the value
        flattened[key] = obj[key];
      }
    }
  }

  return flattened;
}

function flattenData(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(flattenData);
  }

  let flattened = {};

  // Iterate over the keys of the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // If the key is "attributes", merge its properties directly
      if (key === 'data') {
        let data = flattenData(obj[key]);
        if (Array.isArray(data)) {
          return data;
        }
        Object.assign(flattened, data);
      } else if (Array.isArray(obj[key])) {
        // If the value is an array, recursively flatten each item
        flattened[key] = obj[key].map(flattenData);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recursively flatten it
        flattened[key] = flattenData(obj[key]);
      } else {
        // Otherwise, just copy the value
        flattened[key] = obj[key];
      }
    }
  }

  return flattened;
}

function flattenApiData(obj) {
  return flattenData(flattenAttributes(obj));
}

module.exports = {
  flattenAttributes,
  flattenData,
  flattenApiData
}