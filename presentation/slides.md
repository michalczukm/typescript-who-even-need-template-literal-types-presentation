---
theme: default
layout: intro
lineNumbers: false
monaco: true
drawings:
  persist: false
title: Template Literal Types
---

# Template Literal Types

Who even need that?

<div class="abs-b m-8 flex items-center gap-10">
  <img class="w-25 rounded-full" src="/michalczukm.png" alt="michalczukm" />
  <div class="flex flex-col">
    <span class="text-lg font-bold">Michał Michalczuk</span>
    <span>Senior Software Engineer @ <a href="https://www.tektitconsulting.com/" target="_blank" alt="Tektit consulting">Tektit consulting </a></span> 
    <p><a href="https://michalczukm.xyz/" target="_blank" alt="Tektit consulting">michalczukm.xyz</a></p>
  </div>
</div>

<div class="abs-br m-8">
  <a href="https://github.com/michalczukm/typescript-who-even-need-template-literal-types-presentation" target="_blank" alt="GitHub"
    class="text-lg icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github /> Repo with this presentation
  </a>
</div>

---
layout: image-right
image: 'ts-4-1.png'
---

# Typescript 4.1

## November 2020

Minor release but with **big power**.

Template Literal Types first introduced.

---
layout: quote
---

# "Template literal types build on <span class="text-teal-700">string literal types</span>, and have the ability to expand into many strings via unions.

[TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)


---
layout: quote
---

# "They have the "same" syntax as <span class="text-teal-700">template literal strings in JavaScript</span>, but are used in type positions."

[TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)


---
layout: image-center
image: 'tlt-first.png'
---

First announcement

---

# <twemoji-nail-polish/> Tailwind case

<LinkToPlayground :href="'https://example.com'" />

```ts {monaco}
type BaseColor = 'gray' | 'red' | 'yellow' | 'green';

type Variant = 50 | 100 | 200 | 300 | 400;

type TailwindColor = `${BaseColor}-${Variant}`;

const color: TailwindColor = 'red-300';
```


---

# <twemoji-artist-palette/> Design system case

<LinkToPlayground href="https://tsplay.dev/W4nl7N" />

<Scrollable>

```ts {3-5|6-12|13-32|33-46|all}
import React from 'react';

type BaseColor = 'gray' | 'red' | 'yellow' | 'green';
type Variant = 50 | 100 | 200 | 300 | 400;

type ButtonProps = {
  color?: `${BaseColor}-${Variant}`;
  bgColor?: `${BaseColor}-${Variant}`;
  space?: `${number}px`;
  frame?: `${number}${'px' | 'pt' | 'pc' | 'cm' | 'mm' | 'Q' | 'in'}`;
  children: React.ReactNode
};

const FancyDesignSystemButton = ({
  bgColor,
  color,
  space,
  frame,
  children,
}: ButtonProps) => (
  <button
    style={{
      color,
      backgroundColor: bgColor,
      margin: space,
      borderWidth: frame,
      borderColor: 'red',
    }}
  >
    {children}
  </button>
);

const Example = () => (
  <>
    {/* this usage won't compile */}
    <FancyDesignSystemButton color='very blue please' space='deep'>
      click
    </FancyDesignSystemButton>

    {/* this one is ✅ */}
    <FancyDesignSystemButton color='green-400' space='5px'>
      click
    </FancyDesignSystemButton>
  </>
);
```

</Scrollable>


---
layout: iframe-right
url: https://tsplay.dev/W4nM7N
---

# <twemoji-speak-no-evil-monkey/> Interesting examples were created

Like ELIZA bot in types system
<LinkToPlaygroundInline href="https://tsplay.dev/W4nM7N" />

But not very useful one.


---
layout: two-cols-narrow
---

# <twemoji-green-square/> Yet another

Why not Wordle.

<LinkToPlaygroundInline href="https://tsplay.dev/wQ5RZw" />

To be fair - this was February 2022 challenge.

::right::

<Scrollable>
  <Tweet id="1490631626828746753" />
</Scrollable>


---
layout: iframe-right
url: https://tsplay.dev/lWY33N
---

# <twemoji-woman-technologist/> Famous ts-sql

SQL engine based on TS type system.
<LinkToPlaygroundInline href="https://tsplay.dev/lWY33N" />

Heavy uses Template Literal Types.


---
layout: fact
---

# We got some useful examples!


---
layout: image-right
image: hasura.png
---

# <twemoji-magic-wand/> Hasura solved problem of "magic strings"

You can read about it on their blog

<LinkToPlayground href="https://tsplay.dev/WzPgQN" />


[hasura.io/blog/how-typescript-template-literal-types-helped-us-with-multiple-database-support/](https://hasura.io/blog/how-typescript-template-literal-types-helped-us-with-multiple-database-support/)


---
layout: image-right
image: https://github.com/kysely-org/kysely/blob/master/assets/demo.gif?raw=true
---

# <twemoji-woman-technologist/> Kysely

The SQL query builder.

[github.com/koskimas/kysely](https://github.com/koskimas/kysely)


---
layout: two-cols-narrow
---

# <logos-nextjs-icon/> Next.js Statically Typed Links

Type safe hrefs in app.

We will get back to it.

::right::

```ts
import type { Route } from 'next';
import Link from 'next/link'

// ✅
<Link href="/about" />
// ✅
<Link href="/blog/nextjs" />
// ✅
<Link href={`/blog/${slug}`} />
// ✅
<Link href={('/blog' + slug) as Route} />

// ❌ TypeScript errors if href is not a valid route
<Link href="/aboot" />
```


---
layout: intro
---

# <img class="inline-block w-25 -mt-3 rounded-full" src="/michalczukm.png" alt="michalczukm" width="200"/> Michał Michalczuk 

<div>

Senior Software Engineer @ [Tektit Consulting](https://www.tektitconsulting.com/")

Talking head @ [Śniadanie z Programowaniem](https://www.youtube.com/c/%C5%9AniadaniezProgramowaniem)

</div>

---
layout: section
---

# <twemoji-thinking-face/> Where I can use Template Literal Types?

At the end of the day, they are just types!


---
layout: two-cols-narrow
---

# <twemoji-key/> Object key

Since TS v.4.4

## Why?

* building configuration object
* following the convention
* ...

::right::

<Scrollable>

```ts {1-4|6-9|11-13|15-23}
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
```

</Scrollable>


---
layout: two-cols-narrow
---

# <twemoji-key/> Object key

Since TS v.4.4

## Why?

* building configuration object
* following the convention
* ...

::right::

<Scrollable>

```ts {monaco}
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
```

</Scrollable>


---
layout: two-cols-narrow
---

# <twemoji-call-me-hand/> Discriminator

In discriminator union type.

Since TS v.4.5

```ts
interface Success {
  type: `${string}Success`;
  body: string;
};

interface Error {
  type: `${string}Error`;
  message: string;
};
```

Now compiler can dispatch type.

**No** - it doesn't matter that I used interface (not type).

::right::

<Scrollable v-click>

```ts {monaco}
interface Success {
  type: `${string}Success`;
  body: string;
};

interface Error {
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

  if (response.type === 'ok') {
    response.body;
  }
};
```

</Scrollable>


---
layout: two-cols-narrow
---

# <twemoji-snake/> Return type ... kind of dynamic

"dynamic", nice that it checks the constraint now!

Since TS v.4.5

## Why?

* reflect the reality - existing types can be messy

::right::

<div class="flex flex-col justify-center gap-10">
<div v-click>

```ts {monaco}
const makeSuccess = (operation: 'Http' | 'Process'): `${string}Success` => {
  return `${operation}Success`;
};
```

</div>

<div v-click>

```ts {monaco}
const makeSuccessTyped = (
  operation: 'Http' | 'Process'
): 'HttpSuccess' | 'ProcessSuccess' => {
  return `${operation}Success`;
};
```

</div>

<div v-click>

```ts {monaco}
// with TS 5.0 const type parameters
const makeSuccessTyped = <const T extends string>(
  operation: T
): `${T}Success` => {
  return `${operation}Success`;
};

const result = makeSuccessTyped("IO")
```

</div>

</div>


---
layout: section
---

# <twemoji-face-with-monocle/> What about maped types?

Here goes the fun part!


---
layout: two-cols
---

# <logos-angular-icon/> Did you missed Angular?

```ts {3-8|9-12|all}
declare interface EventEmitter<T> {}

type User = {
  name: string;
  surname: string;
  age: number;
};

type Handlers<T> = T & {
  [Key in keyof T as `${string & Key}Changed`]: 
    EventEmitter<T[Key]>;
};

type UserWithHandlers = Handlers<User>;
```


---
layout: two-cols
---

# <logos-angular-icon/> Did you missed Angular?

```ts {monaco}
declare interface EventEmitter<T> {}

type User = {
  name: string;
  surname: string;
  age: number;
};

type Handlers<T> = T & {
  [Key in keyof T as `${string & Key}Changed`]: 
    EventEmitter<T[Key]>;
};

type UserWithHandlers = Handlers<User>;
```

::right::

<div v-click>

```ts
import { 
  Component, EventEmitter, 
  Input, Output 
} from '@angular/core';

@Component({
  selector: 'mm-user',
  template: `<span role="img">👋</span>`,
})
class UserComponent implements UserWithHandlers {
  @Input() name: string;
  @Input() surname: string;
  @Input() age: number;

  @Output() nameChanged: EventEmitter<string> 
    = new EventEmitter();
  @Output() surnameChanged: EventEmitter<string> 
    = new EventEmitter();
  @Output() ageChanged: EventEmitter<number> 
    = new EventEmitter();
}
```

</div>


---
layout: two-cols-narrow
---

# <logos-angular-icon/> Let's do the opposite

Take all fields which have `Changed` in name.

## Why?

* build objects based on existing conventions
* surf over legacy codebase

::right::

```ts {1-8|10|11-}
type User = {
  name: string;
  nameChanged: (name: string) => void;
  surname: string;
  surnameChanged: (surname: string) => void;
  age: number;
  ageChanged: (age: number) => void;
};

type UserHandlers = Pick<User, `${string}Changed` & keyof User>

const userHandlers: UserHandlers = {
  nameChanged: (name) => {},
  surnameChanged: (surname) => {},
  ageChanged: (age) => {},
};

```


---
layout: two-cols-narrow
---

# <logos-angular-icon/> Let's do the opposite

Take all fields which have `Changed` in name.

## Why?

* build objects based on existing conventions
* surf over legacy codebase

::right::

```ts {monaco}
type User = {
  name: string;
  nameChanged: (name: string) => void;
  surname: string;
  surnameChanged: (surname: string) => void;
  age: number;
  ageChanged: (age: number) => void;
};

type UserHandlers = Pick<User, `${string}Changed` & keyof User>

const userHandlers: UserHandlers = {
  nameChanged: (name) => {},
  surnameChanged: (surname) => {},
  ageChanged: (age) => {},
};

```


---
layout: two-cols
---

# <twemoji-health-worker/> Change log

Imagine you have to model structure with `history tables` / `change log` tables.

Each change should have log with `new` & `old` field value.

![db-1-l](/db-1-l.png)

::right::

![db-1-r](/db-1-r.png)


---
layout: two-cols
---

# <twemoji-health-worker/> Change log table

![db-2-l](/db-2-l.png)

::right::

![db-2-r](/db-2-r.png)


---
layout: center
---

# <twemoji-health-worker/> Change log, but shit got real

<img src="/db-3.png" alt="db-3" width="600"/>


---

# <twemoji-health-worker/> Change log in types

```ts {1-6|8-12|13|16}
type PatientEntity = {
  id: string;
  name: string;
  birthDateUtc: Date;
  sex: 'Female' | 'Male';
};

type ChangeLog<T> = {
  id: string;
  entityId: string;
  createdDateUtc: Date;
} & {
  [K in keyof T as `${string & K}_${'old' | 'new'}`]?: T[K];
};

type PatientChangeLog = ChangeLog<PatientEntity>;
```


---

# <twemoji-health-worker/> Change log in types

```ts {monaco}
type PatientEntity = {
  id: string;
  name: string;
  birthDateUtc: Date;
  sex: 'Female' | 'Male';
};

type ChangeLog<T> = {
  id: string;
  entityId: string;
  createdDateUtc: Date;
} & {
  [K in keyof T as `${string & K}_${'old' | 'new'}`]?: T[K];
};

type PatientChangeLog = ChangeLog<PatientEntity>;

const patientLog: ChangeLog<PatientEntity> = {
  id: 'fed5ea5b-f7e5-4e5a-a21f-4094f98dbfad',
  entityId: '5de28255-cfab-4105-b886-c610383ceefa',
  createdDateUtc: new Date(),
  name_old: false, // <-- won't compile
  birthDateUtc_old: new Date(),
};
```


---
layout: section
---

# <twemoji-package/> Unpacking / Unwrapping

We can read components from Template Literal Type, and it is good.


---
layout: image-right
image: ari.png
---

# <twemoji-judge/> ARI

<span class="text-teal-600 text-bold">A</span>tlassian <span class="text-teal-600">R</span>esource <span class="text-teal-600">I</span>dentifier

Hierarchical identifier of resource in Atlassian systems.

It has pattern

`ari:cloud:<resource_owner>:<cloud_id>:<resource_type>/<resource_id>`


---

# <twemoji-judge/> ARI as Template Literal Type

```ts {1-3|5|7-8|all}
type Resource = 'app' | 'site';
type Owner = 'ecosystem' | 'jira' | 'confluence';
type Environment = 'cloud' | 'server';

type Ari = `ari:${Environment}:${Owner}::${Resource}/${string}`;

const mySiteAri: Ari =
  'ari:cloud:ecosystem::site/406d303d-0393-4ec4-ad7c-1435be94583a';
```

<div v-click>

Play with it

```ts {monaco}
type Resource = 'app' | 'site';
type Owner = 'ecosystem' | 'jira' | 'confluence';
type Environment = 'cloud' | 'server';

type Ari = `ari:${Environment}:${Owner}::${Resource}/${string}`;

const mySiteAri: Ari =
  'ari:cloud:ecosystem::site/406d303d-0393-4ec4-ad7c-1435be94583a';
```

</div>


---

# <twemoji-judge/> Unpack ARI

Get its components.

```ts {1|1-5|1-8|1,10-12|1,10-15}
type Ari = `ari:${Environment}:${Owner}::${Resource}/${string}`;

type UnpackEnvironment<T> = T extends `ari:${infer TEnvironment}:${string}`
  ? TEnvironment
  : never;

type EnvironmentUnpacked = UnpackEnvironment<Ari>;
// expected `type EnvironmentUnpacked = "cloud" | "server"`

type UnpackOwner<T> = T extends `ari:${string}:${infer TOwner}:${string}`
  ? TOwner
  : never;

type OwnerUnpacked = UnpackOwner<Ari>;
// expected `type OwnerUnpacked = "ecosystem" | "jira" | "confluence"`
```


---

# <twemoji-judge/> Unpack ARI

<LinkToPlayground href="https://tsplay.dev/NB5Mnw" />

<Scrollable>

```ts {monaco}
type Resource = 'app' | 'site';
type Owner = 'ecosystem' | 'jira' | 'confluence';
type Environment = 'cloud' | 'server';

type Ari = `ari:${Environment}:${Owner}::${Resource}/${string}`;

// ---------- Unpacking ARI -------------------------------------------------------

type UnpackEnvironment<T> = T extends `ari:${infer TEnvironment}:${string}`
  ? TEnvironment
  : never;
type EnvironmentUnpacked = UnpackEnvironment<Ari>;


type UnpackOwner<T> = T extends `ari:${string}:${infer TOwner}:${string}`
  ? TOwner
  : never;
type OwnerUnpacked = UnpackOwner<Ari>;


type UnpackResource<T> =
  T extends `ari:${string}:${string}::${infer TResource}/${string}`
    ? TResource
    : never;
type ResourceUnpacked = UnpackResource<Ari>;

type UnpackResourceId<T> =
  T extends `ari:${string}:${string}::${string}/${infer TResource}`
    ? TResource
    : never;
type ResourceIdUnpacked = UnpackResourceId<Ari>;

type UnpackAll<T> =
  T extends `ari:${infer TEnvironment}:${infer TOwner}::${infer TResource}/${string}`
    ? { environment: TEnvironment; owner: TOwner; resource: TResource }
    : never;
type UnpackedAll = UnpackAll<Ari>;
```

</Scrollable>


---
layout: two-cols
---

# <twemoji-scroll/> Legacy

<LinkToPlayground href="https://tsplay.dev/mArM4W" />

TypeScript has 10 years.

There are lot of legacy patterns.

```ts
type Success = {
  type: 
    | 'HttpSuccess' 
    | 'PipeSuccess' 
    | 'FileSuccess' 
    | 'ProcessSuccess';
  body: string;
};
```

::right::

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

```ts
type Error = {
  type: 
    | 'HttpError' 
    | 'PipeError' 
    | 'FileError' 
    | 'ProcessError';
  message: string;
};
```


---

# <twemoji-scroll/> Unpacking legacy

<LinkToPlayground href="https://tsplay.dev/mArM4W" />

<Scrollable>

```ts {monaco}
type OpSuccess = {
  type: 
    | 'HttpSuccess' 
    | 'PipeSuccess' 
    | 'FileSuccess' 
    | 'ProcessSuccess';
  body: string;
};

type OpError = {
  type: 
    | 'HttpError' 
    | 'PipeError' 
    | 'FileError' 
    | 'ProcessError';
  message: string;
};

type OpResponse = OpSuccess | OpError;

type OperationType = OpResponse['type'] extends `${infer R}${
      | 'Success'
      | 'Error'}`
    ? R
    : never;

const handler = (response: OpResponse) => {
  
  if (response.type === 'HttpSuccess') {
    response.body;
  }

  if (response.type === 'FileSuccess') {
    response.body;
  }

  if (response.type === 'GreatSuccess') {
    return response.body;
  }
};
```

</Scrollable>


---
layout: two-cols-narrow
---

# Have you missed express?

This one is gold.

How to play with path params in express?

Those ones `/api/users/:userId/posts/:postId`

::right::

<Tweet id="1301707026507198464" />


---

# <twemoji-link/> Have you missed express?

Handle paths

```ts {monaco}
type ExtractRouteParams<T extends string> =
  string extends T
  ? Record<string, string>
  : T extends `${infer Start}:${infer Param}/${infer Rest}`
  ? {[k in Param | keyof ExtractRouteParams<Rest>]: string}
  : T extends `${infer Start}:${infer Param}`
  ? {[k in Param]: string}
  : {};

type PostParams = ExtractRouteParams<'/posts/:postId/comments/:commentId'>;

const endpointUrl = '/posts/:postId/:commentId' as const
type CommentInPostParams = ExtractRouteParams<typeof endpointUrl>;
```


---
layout: two-cols-narrow
---

# <twemoji-books/> OFC there is library

Which helps you build such patterns.

<div v-click=3>

```ts
// Result:
type params = {
  postId: string;
  commentId: number;
}
```

</div>

::right::

<Scrollable>

```ts {1|3|5-}
import { Pipe, Objects, Strings, ComposeLeft, Tuples, Match } from "hotscript";

const route = "/posts/<postId:string>/comments/<commentId:number>" as const;

type params = Pipe<
  typeof route,
  [
    Strings.Split<"/">,
    Tuples.Filter<Strings.StartsWith<"<">>,
    Tuples.Map<
      ComposeLeft<[
        Strings.Trim<"<" | ">">,
        Strings.Split<":">,
      ]>
    >,
    Tuples.ToUnion,
    Objects.FromEntries,
    Objects.MapValues<
      Match<[
        Match.With<"string", string>,
        Match.With<"number", number>
      ]>
    >
  ]
>;
```

</Scrollable>


---
layout: section
---

# <logos-nextjs-icon/> How Next.js Statically Typed Links works?

Speaking of urls unpacking.


---
layout: image-right
image: next-dir.png
---

# <logos-nextjs-icon/> Config and app

```ts
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
}
```

More info in [<logos-nextjs-icon/> docs](https://beta.nextjs.org/docs/configuring/typescript#statically-typed-links)

---
layout: two-cols
---


<div class="flex h-full items-center">
  <img src="/next-hrefs.png" class="m-auto" v-bind="props"/>
</div>

::right::

<div class="flex h-full items-center">
  <img v-click src="/next-code-generated.png" v-bind="props"/>
</div>

---

<div>
  <figure class="flex flex-col flex-1 items-center gap-10">
    <img src="/hasura-autocomplete-meme.png" style="height: 400px;width: fit-content;" />
    <figcaption class="m-2">
      <a href="https://hasura.io/blog/how-typescript-template-literal-types-helped-us-with-multiple-database-support/" target="_blank">https://hasura.io/blog/how-typescript-template-literal-types-helped-us-with-multiple-database-support/</a>
    </figcaption>
  </figure>
</div>


---
layout: section
---

# <twemoji-raised-hand/> Hitting the limits

OFC sky is the limit 😜


---

# <twemoji-key/> Revisit Configuration example

```ts {1-4|6-10}
type Configuration = {
  name: string;
  ipV4: `${number}.${number}.${number}.${number}`;
};

// ah, way better!
type Configuration = {
  name: string;
  ipV4: `${ComputeRange<256>}.${ComputeRange<256>}.${ComputeRange<256>}.${ComputeRange<256>}`;
};
```

<div v-click>

Here we go

```ts
type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>;
```

</div>


---

# <twemoji-key/> Revisit Configuration example

```ts {monaco}
type ComputeRange<
  N extends number,
  Result extends Array<unknown> = []
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>;

type Mask256 = `${ComputeRange<256>[number]}`;

type Configuration = {
  // won't compile: Expression produces a union type that is too complex to represent.ts(2590)
  ipV4: `${Mask256}.${Mask256}.${Mask256}.${Mask256}`;
  notThatComplex: `${Mask256}.${Mask256}`
};
```

Caveats

* Limit is 100 000 combinations
* Types calculation becomes very CPU consuming


---
layout: quote
---

# "We generally recommend that people use <span class="text-teal-700">ahead-of-time generation for large string unions</span>, but this is useful in smaller cases."

from TypeScript documentation

---
layout: quote
---

# "When overused, template literals, <span class="text-teal-700">can give your IDE a hard time</span> as they can get quite complex and CPU consuming, <span class="text-teal-700">especially when combined with recursion</span>.

<div v-click>

# Complex types are also <span class="text-teal-700">not going to be a lot of fun to maintain</span> unless you're really interested in TypeScript's type system."

</div>

from https://michalzalecki.com/typescript-template-literal-types/

---
layout: fact
---

# Use TypeScript rich types toolset

<div v-click>

But don't make your types look like a git conflict

</div>

---
layout: fact
---

# Type em'all!

<div v-click>

But please be rational, and remember that other humans will have to read it

</div>

---
layout: two-cols
---

# Resources

* General about Template Literal Types
  * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
  * https://github.com/ghoullier/awesome-template-literal-types
  * https://effectivetypescript.com/2020/11/05/template-literal-types/
  * https://michalzalecki.com/typescript-template-literal-types/
  * https://levelup.gitconnected.com/intrinsic-types-in-typescript-8b9f814410d

::right::

* Examples which you can actually use
  * https://hasura.io/blog/how-typescript-template-literal-types-helped-us-with-multiple-database-support/
  * https://github.com/gvergnaud/hotscript
  * https://github.com/Lionad-Morotar/Anysort
  * https://github.com/koskimas/kysely
  * https://github.com/dotansimha/graphql-typed-ast
  * https://github.com/nanostores/router
  * https://twitter.com/danvdk/status/1301707026507198464
* Next.js statically typed links
  * https://beta.nextjs.org/docs/configuring/typescript#statically-typed-links
  * https://twitter.com/shuding_/status/1620137501192253440
* Crazy examples
  * https://twitter.com/buildsghost/status/1301976526603206657
  * https://twitter.com/mikeryandev/status/1308472279010025477
  * https://twitter.com/orta/status/1490631626828746753
  * https://github.com/codemix/ts-sql

---
layout: two-cols
---

# Thank you!

Drop message

<div class="my-15 flex items-center gap-5">
  <img class="w-25 rounded-full" src="/michalczukm.png" alt="michalczukm" />
  <div class="flex flex-col gap-5">
    <span><a href="https://michalczukm.xyz/" target="_blank">michalczukm.xyz</a></span>
    <span><a href="https://discord.gg/MRakNtCuJJ" target="_blank"><skill-icons-discord/> Śniadanie z Programowaniem</a></span>
    <span><a href="https://twitter.com/michalczukm" target="_blank"><logos-twitter/> @michalczukm</a></span>
  </div>
</div>

::right::

<a href="https://github.com/michalczukm/typescript-who-even-need-template-literal-types-presentation" target="_blank" alt="GitHub" class="text-lg icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github /> Repo with this presentation
</a>

<div class="my-10">
<img src="/QR.png" />
</div>
