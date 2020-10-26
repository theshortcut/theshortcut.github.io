import { createStyled } from '@stitches/react';

export const theme = {
  colors: {
    $hiContrast: 'hsl(206,10%,5%)',
    $loContrast: 'white',

    $gray100: 'hsl(206,22%,99%)',
    $gray200: 'hsl(206,12%,97%)',
    $gray300: 'hsl(206,11%,92%)',
    $gray400: 'hsl(206,10%,84%)',
    $gray500: 'hsl(206,10%,76%)',
    $gray600: 'hsl(206,10%,44%)',

    $blue100: 'hsl(190,100%,50%)',

    $teal100: 'hsl(180,100%,45%)',

    $green100: 'hsl(118,80%,72%)',

    $yellow100: 'hsl(49,100%,72%)',

    $red100: 'hsl(11,100%,87%)',

    $background: 'hsl(206,10%,10%)',
    $foreground: 'hsl(206,22%,99%)',
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $maxWidth: '1200px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
  },
  fonts: {
    $heading:
      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    $body:
      'Hind, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: (config) => (
      value: keyof typeof theme['space'] | (string & Record<string, unknown>),
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (
      value: keyof typeof theme['space'] | (string & Record<string, unknown>),
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (
      value: keyof typeof theme['space'] | (string & Record<string, unknown>),
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (
      value: keyof typeof theme['space'] | (string & Record<string, unknown>),
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  },
});
