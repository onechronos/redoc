import { darken, desaturate, lighten, readableColor, transparentize } from 'polished';

import CWBREot from '../static/fonts/ColfaxWebBold/ColfaxWebBold.eot';
import CWBRWoff from '../static/fonts/ColfaxWebBold/ColfaxWebBold.woff';
import CWBRWoff2 from '../static/fonts/ColfaxWebBold/ColfaxWebBold.woff2';

import CWBIEot from '../static/fonts/ColfaxWebBoldItalic/ColfaxWebBoldItalic.eot';
import CWBIWoff from '../static/fonts/ColfaxWebBoldItalic/ColfaxWebBoldItalic.woff';
import CWBIWoff2 from '../static/fonts/ColfaxWebBoldItalic/ColfaxWebBoldItalic.woff2';

import CWLREot from '../static/fonts/ColfaxWebLight/ColfaxWebLight.eot';
import CWLRWoff from '../static/fonts/ColfaxWebLight/ColfaxWebLight.woff';
import CWLRWoff2 from '../static/fonts/ColfaxWebLight/ColfaxWebLight.woff2';

import CWLIEot from '../static/fonts/ColfaxWebLightItalic/ColfaxWebLightItalic.eot';
import CWLIWoff from '../static/fonts/ColfaxWebLightItalic/ColfaxWebLightItalic.woff';
import CWLIWoff2 from '../static/fonts/ColfaxWebLightItalic/ColfaxWebLightItalic.woff2';

import CWMREot from '../static/fonts/ColfaxWebMedium/ColfaxWebMedium.eot';
import CWMRWoff from '../static/fonts/ColfaxWebMedium/ColfaxWebMedium.woff';
import CWMRWoff2 from '../static/fonts/ColfaxWebMedium/ColfaxWebMedium.woff2';

import CWMIEot from '../static/fonts/ColfaxWebMediumItalic/ColfaxWebMediumItalic.eot';
import CWMIWoff from '../static/fonts/ColfaxWebMediumItalic/ColfaxWebMediumItalic.woff';
import CWMIWoff2 from '../static/fonts/ColfaxWebMediumItalic/ColfaxWebMediumItalic.woff2';

import CWRREot from '../static/fonts/ColfaxWebRegular/ColfaxWebRegular.eot';
import CWRRWoff from '../static/fonts/ColfaxWebRegular/ColfaxWebRegular.woff';
import CWRRWoff2 from '../static/fonts/ColfaxWebRegular/ColfaxWebRegular.woff2';

import CWRIEot from '../static/fonts/ColfaxWebRegularItalic/ColfaxWebRegularItalic.eot';
import CWRIWoff from '../static/fonts/ColfaxWebMediumItalic/ColfaxWebMediumItalic.woff';
import CWRIWoff2 from '../static/fonts/ColfaxWebMediumItalic/ColfaxWebMediumItalic.woff2';
import { createGlobalStyle } from 'styled-components';

const makeColfax = (
  fontStyle: string,
  fontWeight: number,
  eotPath: string,
  woff2Path: string,
  woffPath: string,
) => {
  return `
  @font-face {
    font-family: 'ColfaxWeb';
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-synthesis:weight;
    src: url('${eotPath}') format('embedded-opentype'),
          url('${woff2Path}') format('woff2'),
          url('${woffPath}') format('woff');
  }`;
};

const COLFAX_FONT_FAMILY = `
  ${makeColfax('normal', 300, CWLREot, CWLRWoff2, CWLRWoff)}
  ${makeColfax('italic', 300, CWLIEot, CWLIWoff2, CWLIWoff)}
  ${makeColfax('normal', 400, CWRREot, CWRRWoff2, CWRRWoff)}
  ${makeColfax('italic', 400, CWRIEot, CWRIWoff2, CWRIWoff)}
  ${makeColfax('normal', 500, CWMREot, CWMRWoff2, CWMRWoff)}
  ${makeColfax('italic', 500, CWMIEot, CWMIWoff2, CWMIWoff)}
  ${makeColfax('normal', 700, CWBREot, CWBRWoff2, CWBRWoff)}
  ${makeColfax('italic', 700, CWBIEot, CWBIWoff2, CWBIWoff)}
`;

export const GlobalStyle = createGlobalStyle`
${COLFAX_FONT_FAMILY}
`;

const defaultTheme: ThemeInterface = {
  spacing: {
    unit: 5,
    sectionHorizontal: ({ spacing }) => spacing.unit * 8,
    sectionVertical: ({ spacing }) => spacing.unit * 8,
  },
  breakpoints: {
    small: '50rem',
    medium: '75rem',
    large: '105rem',
  },
  colors: {
    tonalOffset: 0.2,
    primary: {
      main: '#325e8d',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    success: {
      main: '#1d8127',
      light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.success.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
      contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    warning: {
      main: '#ffa500',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
      contrastText: '#ffffff',
    },
    error: {
      main: '#d41f1c',
      light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
      dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
      contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: ({ colors }) => lighten(colors.tonalOffset, colors.text.primary),
    },
    border: {
      dark: 'rgba(0,0,0, 0.1)',
      light: '#ffffff',
    },
    responses: {
      success: {
        color: ({ colors }) => colors.success.main,
        backgroundColor: ({ colors }) => transparentize(0.93, colors.success.main),
        tabTextColor: ({ colors }) => colors.responses.success.color,
      },
      error: {
        color: ({ colors }) => colors.error.main,
        backgroundColor: ({ colors }) => transparentize(0.93, colors.error.main),
        tabTextColor: ({ colors }) => colors.responses.error.color,
      },
      redirect: {
        color: ({ colors }) => colors.warning.main,
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
        tabTextColor: ({ colors }) => colors.responses.redirect.color,
      },
      info: {
        color: '#87ceeb',
        backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
        tabTextColor: ({ colors }) => colors.responses.info.color,
      },
    },
    http: {
      get: '#2F8132',
      post: '#186FAF',
      put: '#95507c',
      options: '#947014',
      patch: '#bf581d',
      delete: '#cc3333',
      basic: '#707070',
      link: '#07818F',
      head: '#A23DAD',
    },
  },
  schema: {
    linesColor: (theme) =>
      lighten(
        theme.colors.tonalOffset,
        desaturate(theme.colors.tonalOffset, theme.colors.primary.main),
      ),
    defaultDetailsWidth: '75%',
    typeNameColor: (theme) => theme.colors.text.secondary,
    typeTitleColor: (theme) => theme.schema.typeNameColor,
    requireLabelColor: (theme) => theme.colors.error.main,
    labelsTextSize: '0.9em',
    nestingSpacing: '1em',
    nestedBackground: '#fafafa',
    arrow: {
      size: '1.1em',
      color: (theme) => theme.colors.text.secondary,
    },
  },
  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: 'ColfaxWeb',
    smoothing: 'antialiased',
    optimizeSpeed: true,
    headings: {
      fontFamily: 'ColfaxWeb',
      lineHeight: '1.43',
    },
    code: {
      fontSize: '13px',
      fontFamily: 'Courier, monospace',
      lineHeight: ({ typography }) => typography.lineHeight,
      fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.05)',
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  sidebar: {
    width: '239px',
    backgroundColor: '#fff',
    textColor: '#333333',
    activeTextColor: (theme) =>
      theme.sidebar.textColor !== defaultTheme.sidebar!.textColor
        ? theme.sidebar.textColor
        : theme.colors.primary.main,
    groupItems: {
      textTransform: 'uppercase',
    },
    level1Items: {
      textTransform: 'none',
    },
    arrow: {
      size: '1.5em',
      color: (theme) => theme.sidebar.textColor,
    },
  },
  logo: {
    maxHeight: ({ sidebar }) => sidebar.width,
    maxWidth: ({ sidebar }) => sidebar.width,
    gutter: '2px',
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    textColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  },
};

export default defaultTheme;

export function resolveTheme(theme: ThemeInterface): ResolvedThemeInterface {
  const resolvedValues = {};
  let counter = 0;
  const setProxy = (obj, path: string) => {
    Object.keys(obj).forEach((k) => {
      const currentPath = (path ? path + '.' : '') + k;
      const val = obj[k];
      if (typeof val === 'function') {
        Object.defineProperty(obj, k, {
          get() {
            if (!resolvedValues[currentPath]) {
              counter++;
              if (counter > 1000) {
                throw new Error(
                  `Theme probably contains circular dependency at ${currentPath}: ${val.toString()}`,
                );
              }

              resolvedValues[currentPath] = val(theme);
            }
            return resolvedValues[currentPath];
          },
          enumerable: true,
        });
      } else if (typeof val === 'object') {
        setProxy(val, currentPath);
      }
    });
  };

  setProxy(theme, '');
  return JSON.parse(JSON.stringify(theme));
}

export interface ColorSetting {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface HTTPResponseColos {
  color: string;
  backgroundColor: string;
  tabTextColor: string;
}

export interface FontSettings {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  lineHeight: string;
  color: string;
}

export interface ResolvedThemeInterface {
  spacing: {
    unit: number;
    sectionHorizontal: number;
    sectionVertical: number;
  };
  breakpoints: {
    small: string;
    medium: string;
    large: string;
  };
  colors: {
    tonalOffset: number;
    primary: ColorSetting;
    success: ColorSetting;
    warning: ColorSetting;
    error: ColorSetting;
    gray: {
      50: string;
      100: string;
    };
    border: {
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    responses: {
      success: HTTPResponseColos;
      error: HTTPResponseColos;
      redirect: HTTPResponseColos;
      info: HTTPResponseColos;
    };
    http: {
      get: string;
      post: string;
      put: string;
      options: string;
      patch: string;
      delete: string;
      basic: string;
      link: string;
      head: string;
    };
  };
  schema: {
    linesColor: string;
    defaultDetailsWidth: string;
    typeNameColor: string;
    typeTitleColor: string;
    requireLabelColor: string;
    labelsTextSize: string;
    nestingSpacing: string;
    nestedBackground: string;
    arrow: {
      size: string;
      color: string;
    };
  };
  typography: {
    fontSize: string;
    lineHeight: string;
    fontWeightLight: string;
    fontWeightRegular: string;
    fontWeightBold: string;
    fontFamily: string;

    smoothing: string;
    optimizeSpeed: boolean;

    code: FontSettings & {
      backgroundColor: string;
      wrap: boolean;
    };
    headings: {
      fontFamily: string;
      fontWeight: string;
      lineHeight: string;
    };

    links: {
      color: string;
      visited: string;
      hover: string;
    };
  };
  sidebar: {
    width: string;
    backgroundColor: string;
    textColor: string;
    activeTextColor: string;
    groupItems: {
      textTransform: string;
    };
    level1Items: {
      textTransform: string;
    };
    arrow: {
      size: string;
      color: string;
    };
  };
  logo: {
    maxHeight: string;
    maxWidth: string;
    gutter: string;
  };
  rightPanel: {
    backgroundColor: string;
    textColor: string;
    width: string;
  };
  codeBlock: {
    backgroundColor: string;
  };

  extensionsHook?: (name: string, props: any) => string;
}

export type primitive = string | number | boolean | undefined | null;
export type AdvancedThemeDeep<T> = T extends primitive
  ? T | ((theme: ResolvedThemeInterface) => T)
  : AdvancedThemeObject<T>;
export type AdvancedThemeObject<T> = { [P in keyof T]?: AdvancedThemeDeep<T[P]> };
export type ThemeInterface = AdvancedThemeObject<ResolvedThemeInterface>;
