# who-even-need-template-literal-types

👋 This is code for "Template Literal types in Typescript - who even need that?" presentation

All files with code samples can be found in [./code-examples](./code-examples)

## Description

> TypeScript 4.1 was a minor release, but it bring one of biggest revelations in the language.
>
> It introduced Template Literal types. I assume that you saw crazy examples with parsers, or SQL engine working pure on type system.
> Thats totally cool, but it doesn't answer the question - why would YOU use it, and who actually need it.
>
> This short talk focuses on what Template Literal Types are, and what are more real use cases for them.

## Presentation

[Check it online - click](https://typescript-who-even-need-template-literal-types-presentation.vercel.app/)

## Appendix

During one of the presentations I got a question about tracing compiler operations and measuring its performance.

**A:** You can do it! There are even ready to use tools from TypeScript team - [@typescript/analyze-trace`](https://www.npmjs.com/package/@typescript/analyze-trace)

More info on that:

* https://github.com/microsoft/TypeScript/wiki/Performance#performance-tracing
* https://github.com/microsoft/TypeScript/wiki/Performance-Tracing

[This article](https://dev.to/nicklucas/typescript-runtime-validators-and-dx-a-type-checking-performance-analysis-of-zodsuperstructyuptypebox-5416) compares runtime validators performance - you will find great example of usage of `@typescript/analyze-trace`.

For checking the traces you can use [ui.perfetto.dev](https://ui.perfetto.dev/)

## About me

[michalczukm.xyz](https://michalczukm.xyz)
