import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';

const ApplicationTheme = createMuiTheme({
/*   typography: {
    fontFamily: [
     '"Formular"',
      '"Helvetica Neue"',
      'Helvetica',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  }, */
  palette: {
    primary: teal,
    secondary: pink,
    // error: {},
  },
});

export default ApplicationTheme;
