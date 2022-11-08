type UnpackPromise<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;

type N = UnpackPromise<Promise<number>>; // number
type N2 = Awaited<Promise<number>>; // number

type Entry = 'In' | 'Out';
type InOrOut<T> = T extends `fade${infer R extends Entry}` ? R : never;

type In = InOrOut<'fadeIn'>;
type Out = InOrOut<'fadeOut'>;

function logKey<S extends string | symbol>(key: S): S {
  // Now an error.
  console.log(`${key} is the key`);
  return key;
}

function get<T, K extends keyof T>(obj: T, key: keyof T) {
  // Now an error.
  console.log(`Grabbing property '${key}'.`);
  return obj[key];
}

const b = Symbol('b');

const foo = {
  a: 100,
  [b]: 200,
} as const;

foo[b];

{
  function foo<V extends string>(arg: `*${V}*`): V {
    // dirty :P
    return arg.match(/\*(.*)\*/)?.[1]! as V;
  }

  function test<T extends string>(s: string, n: number, b: boolean, t: T) {
    let x1 = foo('*hello*'); // "hello"
    let x2 = foo('**hello**'); // "*hello*"
    let x3 = foo(`*${s}*` as const); // string
    let x4 = foo(`*${n}*` as const); // `${number}`
    let x5 = foo(`*${b}*` as const); // "true" | "false"
    let x6 = foo(`*${t}*` as const); // `${T}`
    let x7 = foo(`**${s}**` as const); // `*${string}*`
  }
}

{
  declare const yourName: string;

  // 'bar' has type '`hello ${string}`'.
  const bar = `hello ${yourName}` as const;
  //                              ^^^^^^^^

  // 'baz' has type 'string'.
  const baz = `hello ${yourName}`;
}

{
  type SnakeToCamel<
    T extends string,
    Acc extends string[] = []
  > = T extends `${infer Head}_${infer Tail}`
    ? SnakeToCamel<
        `${Uncapitalize<Head>}${Capitalize<Tail>}`,
        [`${Uncapitalize<Head>}${Capitalize<Tail>}`]
      >
    : Acc[0];

  type Test = SnakeToCamel<'foo_bar_span_hey'>;
}

{
  type ConstArrayType = [1, 2, 3];
  type ConstArrayTypeLength = ConstArrayType['length'];
}

{
  type CountToN<
    N extends number,
    Result extends Array<unknown> = []
  > = Result['length'] extends N
    ? Result
    : CountToN<N, [...Result, Result['length']]>;

  type CountTo2 = CountToN<2>;

  // type FixedArray = [1, 2, 3]["length"]

  type CountTo<N extends number, S extends 0[] = []> = S['length'] extends N
    ? S
    : CountTo<N, [...S, 0]>;

  type CountTo3 = CountTo<3>['length'];
  type Add<A extends number, B extends number> = [
    ...CountTo<A>,
    ...CountTo<B>
  ]['length'];
  
  type Add4to3 = Add<4, 3>;
}

{
  type CompanyFetchResult = Promise<{ name: string }>

  type UnpackPromise<T> = T extends PromiseLike<infer U> ? U : never 

  type Company = UnpackPromise<CompanyFetchResult>
}

export {};
