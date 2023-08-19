// tailwind.config.ts
import { Config } from 'tailwindcss';

export default <Config>{
  content: [
    './assets/**/*.{css,scss}',
    './components/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './layouts/*.{vue,js,ts}',
    './modals/**/*.{vue,js,ts}',
    './pages/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/*.{vue,js,ts}',
    './plugins/**/*.{vue,js,ts}',
    './store/*.{vue,js,ts}',
    './store/**/*.{vue,js,ts}',
  ],

  theme: {
    screens: {
      null: {
        min: '0px',
      },
      xs: {
        min: `${375 - 1}px`,
      },
      sm: {
        min: `${640 - 1}px`,
      },
      md: {
        min: `${840 - 1}px`,
      },
      xl: {
        min: `${1280 - 1}px`,
      },
    },
    spacing: {
      px: '1px',
      '1em': '1em',
      '1ch': '1ch',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      80: '80px',
      96: '96px',
      128: '128px',
      160: '160px',
      192: '192px',
      224: '224px',
      256: '256px',
      320: '320px',
      480: '480px',
      560: '560px',
      640: '640px',
      840: '840px',
      960: '960px',
      1024: '1024px',
      1280: '1280px',
      1440: '1440px',
    },
    fontSize: {
      'heading-1': [
        '48px',
        {
          lineHeight: '48px',
        },
      ],
      'heading-2': [
        '40px',
        {
          lineHeight: '40px',
        },
      ],
      'heading-3': [
        '42px',
        {
          lineHeight: '42px',
        },
      ],
      'heading-4': [
        '32px',
        {
          lineHeight: '32px',
        },
      ],
      'heading-5': [
        '24px',
        {
          lineHeight: '24px',
        },
      ],
      'heading-6': [
        '18px',
        {
          lineHeight: '18px',
        },
      ],
      large: [
        '18px',
        {
          lineHeight: '24px',
        },
      ],
      body: [
        '18px',
        {
          lineHeight: '20px',
          letterSpacing: '0.16px',
        },
      ],
      DEFAULT: [
        '18px',
        {
          lineHeight: '20px',
          letterSpacing: '0.16px',
        },
      ],
      footnote: [
        '16px',
        {
          lineHeight: '18px',
          letterSpacing: '0.16px',
        },
      ],
      caption: [
        '12px',
        {
          lineHeight: '16px',
          letterSpacing: '0.32px',
        },
      ],
      tiny: [
        '10px',
        {
          lineHeight: '14px',
          letterSpacing: '0.32px',
        },
      ],
    },
    extend: {
      container: {
        null: {
          min: '0px',
        },
        xs: {
          min: `${375 - 1}px`,
        },
        sm: {
          min: `${640 - 1}px`,
        },
        md: {
          min: `${840 - 1}px`,
        },
        xl: {
          min: `${1280 - 1}px`,
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
