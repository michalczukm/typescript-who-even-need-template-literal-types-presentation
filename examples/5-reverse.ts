/**
 * Example 5: Extract fields which keys fulfill condition
 */

type User = {
  name: string;
  nameChanged: (name: string) => void;
  surname: string;
  surnameChanged: (surname: string) => void;
  age: number;
  ageChanged: (age: number) => void;
};

type KeyFulfillConstraint<T, TConstraint> = {
  [OnlyStringKey in {
    [Key in keyof T]: Key extends TConstraint ? Key : never;
  }[keyof T]]: T[OnlyStringKey];
};

type UserHandlers = KeyFulfillConstraint<User, `${string}Changed`>;
/**
 * Result type 👇
 * 
 * type UserHandlers = {
    nameChanged: (name: string) => void;
    surnameChanged: (surname: string) => void;
    ageChanged: (age: number) => void;
  }
 */

const userHandlers: UserHandlers = {
  nameChanged: (name) => {},
  surnameChanged: (surname) => {},
  ageChanged: (age) => {},
};

export {};
