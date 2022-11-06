/**
 * Example 1 a): great @sulco example with Tailwind colors
 * https://twitter.com/sulco/status/1332337570563448834
 */

type BaseColor = 'gray' | 'red' | 'yellow' | 'green';

type Variant = 50 | 100 | 200 | 300 | 400;

// 'gray-50' | 'gray-100' | 'gray-200' ...

type TailwindColor = `${BaseColor}-${Variant}`;

const color: TailwindColor = 'red-300';

/**
 * Example 1 b): Imagine every design system you create - you have ready solution for your
 * inputs/props
 */
import React, { FunctionComponent } from 'react';

type MySystemColor = `${BaseColor}-${Variant}`;

type ButtonProps = {
  color?: MySystemColor;
  bgColor?: MySystemColor;
  space?: `${number}px`;
  frame?: `${number}${'px' | 'pt' | 'pc' | 'cm' | 'mm' | 'Q' | 'in'}`;
};

const FancyDesignSystemButton: FunctionComponent<ButtonProps> = ({
  bgColor,
  color,
  space,
  frame,
  children,
}) => (
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

export {};
