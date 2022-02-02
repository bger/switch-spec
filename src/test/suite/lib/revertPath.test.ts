import * as assert from 'assert';
import revertPath from '../../../lib/revertPath';

// import * as myExtension from '../../extension';

describe('revertPath', () => {
  context('when path doesnt match any pattern', () => {
    it('returns original path', () => {
      const path = "/some/unexpeted/path.rb";

      assert.strictEqual(revertPath(path), path);
    });
  });

  context('when path matches class definition path', () => {
    it('returns spec path', () => {
      const classPath = "/Users/bernyg/projects/dummy/app/services/charity/money.rb";
      const specPath = "/Users/bernyg/projects/dummy/spec/services/charity/money_spec.rb";

      assert.strictEqual(revertPath(classPath), specPath);
    });
  });

  context('when path matches spec definition path', () => {
    it('returns class definition path', () => {
      const specPath = "/Users/bernyg/projects/dummy/spec/services/charity/money_spec.rb";
      const classPath = "/Users/bernyg/projects/dummy/app/services/charity/money.rb";

      assert.strictEqual(revertPath(specPath), classPath);
    });
  });
});
