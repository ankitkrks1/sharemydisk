import getHttps from './getHttps';

export default (arg: string[]) => {
  if (arg.indexOf('-p') !== -1) {
    return parseInt(arg[arg.indexOf('-p') + 1]);
  } else {
    if (getHttps(arg)) {
      console.log('Secure Mode selected , Https port is 443.');
      return 443;
    } else {
      console.log('switching to default port :-  3000');
      return 3000;
    }
  }
};
