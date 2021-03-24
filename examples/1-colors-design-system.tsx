/**
 * Example 1 a): great @sulco example with Tailwind colors
 * https://twitter.com/sulco/status/1332337570563448834
 */

type BaseColor = 'gray' | 'red' | 'yellow' | 'green';

type Variant = 50 | 100 | 200 | 300 | 400;

type TailwindColor = `${BaseColor}-${Variant}`;

const color: TailwindColor = 'red-300';

/**
 * Example 1 b): Imagine every design system you create - you have ready solution for your
 * inputs/props
 */
import React, { FunctionComponent } from 'react';

type ButtonProps = {
  color: `${BaseColor}-${Variant}`;
  bgColor: `${BaseColor}-${Variant}`;
  space: `${number}px`;
};

const FancyDesignSystemButton: FunctionComponent<ButtonProps> = ({
  bgColor,
  color,
  space,
  children,
}) => (
  <button style={{ color, backgroundColor: bgColor, margin: space }}>
    {children}
  </button>
);

export {};
