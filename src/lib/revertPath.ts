function revertPath(path: string): string {
  const specRegexp = /(.+)(spec\/)(.+\/)(.+)_spec(\.rb)/;
  const regexp = /(.+)(app\/)(.+\/)(.+)(\.rb)/;

  let match;

  if((match = path.match(specRegexp))) {
    return match[1]
      .concat('app/')
      .concat(match[3]) // filedir
      .concat(match[4]) // filename
      .concat(match[5]); // ext
  } else if((match = path.match(regexp))) {
    return match[1]
      .concat('spec/')
      .concat(match[3]) // filedir
      .concat(match[4].concat('_spec')) // filename
      .concat(match[5]); // ext
  } else {
    return path;
  }
}

export default revertPath;
