import * as path from 'path';

const getDirectory = (arg: string[]) => {
  if (arg.indexOf('-d') > 0) {
    console.log('serving ', arg[arg.indexOf('-d') + 1]);
    return arg[arg.indexOf('-d') + 1];
  } else {
    console.log(
      'switching to default path :-  ',
      path.resolve(__dirname, '../'),
    );
    return path.resolve(__dirname, '../');
  }
};

export default getDirectory;
