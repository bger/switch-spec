function revertPath(path: string): string {
  const specRegexp = /(.+)(spec\/)(.+\/)(.+)_spec(\.rb)/;
  const regexp = /(.+)(app\/|lib\/)(.+\/)(.+)(\.rb)/;

  let match;

  if((match = path.match(specRegexp))) {
    let rootDir = match[3].match(/^lib\//) ? '' : 'app/';
    return match[1] // /Users/username/dummyapp
      .concat(rootDir) // app | lib
      .concat(match[3]) // filedir
      .concat(match[4]) // filename
      .concat(match[5]); // ext
  } else if((match = path.match(regexp))) {
    let rootDir = match[2].match(/lib/) ? match[2] : '';
    return match[1]
      .concat('spec/')
      .concat(rootDir) // lib | ''
      .concat(match[3]) // filedir
      .concat(match[4].concat('_spec')) // filename
      .concat(match[5]); // ext
  } else {
    return path;
  }
}

export default revertPath;
