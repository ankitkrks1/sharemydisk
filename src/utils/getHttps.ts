export default (arg: string[]) => {
  if (arg.indexOf('-s') !== -1) {
    return true;
  } else {
    console.log('switching to default http');
    return false;
  }
};
