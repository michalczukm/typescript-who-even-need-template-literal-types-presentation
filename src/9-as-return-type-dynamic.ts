const makeSuccess = (operation: 'Http' | 'Process'): `${string}Success` => {
  // compiler still tracks that the result will fulfil type
  return `${operation}Success`;
};

const makeSuccessTyped = (
  operation: 'Http' | 'Process'
): 'HttpSuccess' | 'ProcessSuccess' => {
  // compiler still tracks that the result will fulfil type
  return `${operation}Success`;
};

export {};
