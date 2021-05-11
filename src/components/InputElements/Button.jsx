import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #7A00F6 30%, #7A00F6 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 2px 2px 2px #B300FF50',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default CustomButton
