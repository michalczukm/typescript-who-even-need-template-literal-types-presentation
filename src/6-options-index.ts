/**
 * Example 5: Extract fields which keys fulfill condition
 */
type Configuration = {
  name: string;
  ipV4: `${number}.${number}.${number}.${number}`;
};

const configuration: Configuration = {
  name: 'localhost',
  ipV4: '127.0.0.1',
};

type Options = {
  [K: `${string}Option`]: boolean;
};

type ConfigurationWithOptions = Configuration & Options;

const configurationWithOptions: ConfigurationWithOptions = {
  name: 'localhost',
  ipV4: '127.0.0.1',
  watchOption: true,
  buildOption: true,
  build: true, // won't compile - doesn't have `Option` suffix
};

export {};
