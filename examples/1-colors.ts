/**
 * Example 1: great @sulco example with Tailwind colors
 * https://twitter.com/sulco/status/1332337570563448834
 */

type BaseColor = 'gray' | 'red' | 'yellow' | 'green';

type Variant = 50 | 100 | 200 | 300 | 400;

type TailwindColor = `${BaseColor}-${Variant}`;

/**
 * Imagine every design system you create - you have ready solution for your
 * inputs/props
 */
const color: TailwindColor = 'red-300';

export {};
