import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import preline from 'preline/plugin';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

// import plugin from 'tailwindcss/plugin';

// interface TailwindPluginParams {
//   addBase: (base: Record<string, Record<string, string>>) => void;
//   theme: (path: string) => any;
// }

const config: Config = {
  content: {
    files: [
      './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
      'node_modules/preline/dist/*.js',
    ],

    /**
     * Add extractor.
     * The custom extractor lets you use the new ~ modifier in your Tailwind classes.
     *
     * @see https://tailwindcss.com/docs/content-configuration#customizing-extraction-logic
     */
    extract,
  },

  future: {
    disableColorOpacityUtilitiesByDefault: true,

    // Disable hover styles on mobile with Tailwind CSS
    hoverOnlyWhenSupported: true,
  },

  plugins: [
    // plugin(({ addBase, theme }: TailwindPluginParams) => {
    //   addBase({
    //     ':root': {
    //       '--color-link-breadcrumbs': theme('colors.brand.gray.900'),
    //       '--size-font-breadcrumbs': theme('fontSize.sm')[0],
    //       '--spacing-vertical-separator-breadcrumbs': theme('spacing.2'),
    //       '--display-ellipsis-breadcrumbs': 'none',
    //       '--visibility-truncated-breadcrumbs': 'hidden',
    //       '--position-truncated-breadcrumbs': 'absolute',
    //       '--color-truncated-button': 'var(--color-link-breadcrumbs)',
    //     },
    //   });
    // }),
    /**
     * The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add
     * beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from
     * Markdown, or pulled from a CMS.
     *
     * @see https://github.com/tailwindlabs/tailwindcss-typography
     */
    typography({
      className: 'prose',
    }),

    /**
     * A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
     *
     * @see https://github.com/tailwindlabs/tailwindcss-forms
     */
    forms({
      strategy: 'class', // only generate classes
    }),

    /**
     * Add the plugin Fluid for Tailwind CSS
     *
     * @see https://fluid.tw
     */
    fluid,

    /**
     * Add the plugin Preline for Tailwind CSS
     *
     * @see https://preline.co/
     */
    preline,
  ],

  corePlugins: {
    // Tailwind's base/reset styles
    preflight: true,
  },

  theme: {
    // Tailwind's default font sizes, in `rem` (including line heights)
    fontSize,

    container: {
      center: true,

      padding: {
        DEFAULT: '1.875rem',
        // sm: '2rem',
        // lg: '1rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },

      screens: {
        DEFAULT: '1310px',
      },
    },

    extend: {
      screens: {
        // Tailwind's default screens, in `rem`
        ...screens,
        // '3xl': '108rem' /* 1728px */,
      },

      colors: {
        brand: {
          orange: {
            500: '#F7B89A',
            800: '#f17c3d',
            900: '#EE7035',
          },

          lightGray: '#EEE',

          blue: {
            bgSolutions: '#fbfcff',
            bg: '#F4F7FE',
            400: '#AAC0F1',
            900: '#2A61DB',
          },

          gray: {
            100: '#E6EAEC',
            200: '#F6F6F6',
            500: '#8096A0',
            800: '#335667',
            900: '#002C41',
          },
        },

        current: 'currentColor',
        transparent: 'transparent',
      },

      fontSize: {
        '1.5xl': ['1.375rem', '1.375rem'],
        '2.5xl': ['1.625rem', '2rem'],
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.5rem', '2.5rem'],
        '5.5xl': ['3.5rem', '4.5rem'],
      },

      lineHeight: {
        '24px': '1.5rem',
      },

      letterSpacing: {
        '002': '-.02em',
      },

      /**
       * Add custom spacing values.
       * name(size * 4): size (in rem)
       */
      spacing: {
        '3.5': '0.875rem',
        '3.75': '0.9375rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '13.5': '3.375rem',
        '15': '3.75rem',
        '16.25': '4.0625rem',
        '16.5': '4.125rem',
        '22.5': '5.625rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '43': '10.75rem',
        '44.5': '11.125rem',
        '50': '12.5rem',
        '68.75': '17.1875rem',
        '77.75': '19.375rem',
        '80': '20rem',
        '162': '40.5rem',
      },

      gap: {
        '12.5': '3.125rem',
      },

      fontFamily: {
        sans: ['"var(--font-plus-jakarta)"', ...defaultTheme.fontFamily.sans],
      },
      // typography: (theme: any) => ({
      //   DEFAULT: {
      //     css: {
      typography: (theme: (path: string) => unknown) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand.gray.900'),
            '--tw-prose-headings': theme('colors.brand.gray.900'),
            '--tw-prose-links': theme('colors.brand.orange.900'),
            fontSize: (theme('fontSize.lg') as [string, string])[0],
            lineHeight: theme('lineHeight.snug'),
            fontWeight: theme('fontWeight.light'),
            maxWidth: '100%',

            p: {
              marginTop: 0,
              '&:not(:last-child)': {
                marginBottom: theme('spacing.6'),
              },
            },
          },
        },
      }),
    },
  },
};

export default config;
