// -----Information:-----
// templates/GlobalStyle.style.js
// 1rem = 10px
// body backgraund: Background: '#f3f3f3',
// font Color: Font: '#2c2c2c',

export const theme = {
  colors: {
    //-----DEFAULT----//
    Font: '#2c2c2c',
    FontLight: '#ffffff',
    FontError: '#56000d',
    Background: '#f3f3f3',
    FontSubmitHover: '#36743a',

    //-----ICON-----//
    iconPrice: '#eeaf03',
    iconLocation: ' #0f52ce',
    iconPhone: '#3d943b',

    //-----NAVIGATION-----//
    navActiveFont: '#2c2c2c',
    navActiveBorder: 'rgba(49, 105, 43, 0.573)',
    navActiveBackground: '#f3f3f3',

    //-----Statistics-----//
    statBackground: '#ebebeb',
    statBoxShadow: '#8d8c8c',
    statSell: 'rgb(30, 254, 5)',
    statBuy: 'rgb(255, 153, 0)',
    statVegetables: 'rgb(43, 255, 0)',
    statFruit: 'rgb(255, 85, 0)',
    statCereals: 'rgb(255, 242, 0)',
    statAnimal: 'rgb(0, 255, 238)',
    statMushrooms: 'rgb(0, 140, 255)',

    BackgroundForm: '#ebebeb',
    BackgroundInput: '#ffffff',
    BackgroundButton: '#f3f3f3',
    BackgroundSubmit: '#36743a',
    BackgroundButtonLogout: '#d3c314',
    BackgroundUserPanelBtn: '#36743a',
    BackgroundAdvertisement: '#ececec',

    Border: '#c9c9c9',
    BorderLogout: '#edda0b',
    BorderUserPanel: '#1f3f21',
    BorderShadow: '#447a4896',
    BorderShadowLight: '#254b27c8',
    BorderShadowSell: '#254b27c8',
    BorderShadowBuy: '#254b27c8',

    ShadowSell: 'rgb(184, 101, 24)',
    ShadowBay: 'rgb(25, 112, 53)',
    BorderAdv: 'rgba(10, 10, 10, 0.301)',

    GlassBackground: 'rgba(10, 10, 10, 0.5)',
    GlassBackgroundMobile: 'rgba(10, 10, 10, 0.801)',
    GlassShadow: 'rgba(2, 4, 24, 1)',
    GlassBorder: 'rgba(255, 255, 255, 0.09)',

    // BorderAaadv: 'rgb(29, 201, 103)',
  },
};

export const device = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width:425px)`,
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1024px)`,
  desktopL: `(min-width: 1440px)`,
};

export const fonts = {
  s: '0.8rem',
  m: '1rem',
};

export const padding = {
  button: '4px 16px',
  bigButton: '10px 32px',
};
