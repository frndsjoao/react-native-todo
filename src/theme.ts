import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#DDEAD1',
    100: '#C7DDB5',
    200: '#B3CF99',
    300: '#A3C585',
    400: '#95BB72',
    500: '#87AB69',
    600: '#75975E',
    700: '#658354',
    800: '#4B6043',
    900: '#111822'
  }
}

export default extendTheme({ config, colors })