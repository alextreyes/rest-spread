const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => {
  let mergedObjects = { ...obj1, ...obj2 };
  return mergedObjects;
};

const doubleAndReturnArgs = (arr, ...nums) => {
  let args = [...arr, ...nums];
  return args.map((n) => n * 2);
};

const removeRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
  const { [key]: _, ...rest } = obj;
  return rest;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });
