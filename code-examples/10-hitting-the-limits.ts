type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>;

type Mask256 = `${ComputeRange<256>[number]}`;

type Configuration = {
  // won't compile: Expression produces a union type that is too complex to represent.ts(2590)
  // Max 100 000 combinations are allowed
  ipV4: `${Mask256}.${Mask256}.${Mask256}.${Mask256}`;
  notThatComplex: `${Mask256}.${Mask256}`
};

export {};
