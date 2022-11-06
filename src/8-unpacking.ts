type Success = {
  type: 'HttpSuccess' | 'PipeSuccess' | 'FileSuccess' | 'ProcessSuccess';
  body: string;
};

type Error = {
  type: 'HttpError' | 'PipeError' | 'FileError' | 'ProcessError';
  message: string;
};

const handler = (response: Success | Error) => {
  // we can unpack the part of string
  // rather won't make sense in greenfield projects
  // but when working with legacy TS codebase (or playing with ext. lib) might make sense.
  type OperationType = typeof response['type'] extends `${infer R}${
    | 'Success'
    | 'Error'}`
    ? R
    : never;

  // expected
  // type OperationType = "Http" | "File" | "Process"

  if (response.type === 'HttpSuccess') {
    response.body;
  }

  if (response.type === 'FileSuccess') {
    response.body;
  }
};

{
  // with this Success & Error type defs would also work
  type Success = {
    type: `${'Http' | 'File' | 'Process'}Success`;
    body: string;
  };

  type Error = {
    type: `${'Http' | 'File' | 'Process'}Error`;
    message: string;
  };
}

export {};
