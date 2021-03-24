/**
 * Example 3: map type, with name extended by prefix/suffix
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  name: string;
  surname: string;
  age: number;
};

// Lets create handled which will map this type to new one
// and extend it with `Changed` fields, which are Angular's event emitters.
type Handlers<T> = T &
  {
    [Key in keyof T as `${string & Key}Changed`]: EventEmitter<T[Key]>;
  };

type UserWithHandlers = Handlers<User>;

/**
 * Result type 👇
 * 
 * type UserWithHandlers = User & {
    nameChanged: EventEmitter<string>;
    surnameChanged: EventEmitter<string>;
    ageChanged: EventEmitter<number>;
  }
 */

/**
 * Example usage.
 * Written by hand is a little bit meh, but think about
 * generating components. Then this kind of generic helper shows its power 💪
 */
@Component({
  selector: 'mm-user',
  template: `<span role="img">👋</span>`,
})
class UserComponent implements UserWithHandlers {
  @Input() name: string;
  @Input() surname: string;
  @Input() age: number;

  @Output() nameChanged: EventEmitter<string> = new EventEmitter();
  @Output() surnameChanged: EventEmitter<string> = new EventEmitter();
  @Output() ageChanged: EventEmitter<number> = new EventEmitter();
}

export {};
