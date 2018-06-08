
export const sortByKey = (arr,key) => {
  const sortedArray = [...arr].sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return sortedArray;
};
