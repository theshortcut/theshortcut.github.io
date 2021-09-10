import { createStitches } from '@stitches/react';

const themeTokens = {
  colors: {
    hiContrast: 'hsl(206,10%,5%)',
    loContrast: 'white',

    gray100: 'hsl(206,22%,99%)',
    gray200: 'hsl(206,12%,97%)',
    gray300: 'hsl(206,11%,92%)',
    gray400: 'hsl(206,10%,84%)',
    gray500: 'hsl(206,10%,76%)',
    gray600: 'hsl(206,10%,44%)',
    gray700: 'hsl(206,10%,22%)',
    gray700_50: 'hsla(206,10%,22%,0.5)',

    blue100: 'hsl(190,100%,50%)',

    teal100: 'hsl(180,100%,45%)',

    green100: 'hsl(118,80%,72%)',

    yellow100: 'hsl(49,100%,72%)',

    red100: 'hsl(11,100%,87%)',

    background: 'hsl(206,10%,10%)',
    background_50: 'hsl(206, 10%, 22%)',
    foreground: 'hsl(206,22%,99%)',
  },
  shadows: {
    backgroundLight: 'hsl(206, 10%, 15%)',
    backgroundDark: 'hsl(206, 10%, 5%)',
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '40px',
    7: '48px',
  },
  sizes: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    maxWidth: '1200px',
  },
  radii: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '24px',
    6: '32px',
  },
  fonts: {
    heading:
      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    body:
      'Hind, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
};

export const {
  styled,
  css,
  theme,
  keyframes,
  getCssText,
  globalCss,
} = createStitches({
  theme: themeTokens,
  utils: {
    marginX: (
      value:
        | keyof typeof themeTokens['space']
        | (string & Record<string, unknown>),
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (
      value:
        | keyof typeof themeTokens['space']
        | (string & Record<string, unknown>),
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (
      value:
        | keyof typeof themeTokens['space']
        | (string & Record<string, unknown>),
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (
      value:
        | keyof typeof themeTokens['space']
        | (string & Record<string, unknown>),
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    neumorphic: ({
      distance,
      blur,
      inset,
    }: {
      distance: keyof typeof themeTokens['space'] | string;
      blur: keyof typeof themeTokens['space'] | string;
      inset?: boolean;
    }): { boxShadow: string } => ({
      boxShadow: `${
        inset ? 'inset ' : ''
      }${distance} ${distance} ${blur} $backgroundDark, ${
        inset ? 'inset ' : ''
      }-${distance} -${distance} ${blur} $backgroundLight`,
    }),
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
});
