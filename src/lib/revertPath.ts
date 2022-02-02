/*
  /Users/bernyg/projects/dummy/app/services/charity/money.rb ->
    /Users/bernyg/projects/dummy/spec/services/charity/money_spec.rb

    prefix = /Users/bernyg/projects/dummy/
    root_dir = app/
    file_dir = services/charity/
    filename = money.rb

  1. Replace root fix `spec`
  2. Add _spec postfix to filename
  3. Build new path with prefix/root_dir/file_dir/spec_file_name
*/

function revertPath(path: string): string {
  // const regexp = /([\w_\/]+\/)(app\/)([\w_\/]+\/)(\w+\.rb)/;
  // const regexp = /(?<prefix>.+)(?<root>app\/)(?<file_dir>.+\/)(?<filename>.+\.rb)/;
  const regexp = /(.+)(app\/)(.+\/)(.+)(\.rb)/;

  let match = path.match(regexp);

  if (!match) {
    return '';
  }

  const specPath = match[1]
    .concat('spec/')
    .concat(match[3]) // filedir
    .concat(match[4].concat('_spec')) // filename
    .concat(match[5]); // ext

  return specPath;
}

export default revertPath;
