// now Template Literal Type can be used as discriminator
type Success = {
  type: `${string}Success`;
  body: string;
};

type Error = {
  type: `${string}Error`;
  message: string;
};

const handler = (response: Success | Error) => {
  if (response.type === '*Success') {
    response.body;
  }

  if (response.type === 'HttpSuccess') {
    response.body;
  }

  if (response.type === 'FileSuccess') {
    response.body;
  }

  // won't compile, will be only '`${string}Success` | `${string}Error`'
  if (response.type === 'ok') {
    response.body;
  }

  // I see it like "magic strings with benefits".
  // Great option for legacy JS code bases.
};

export {};
