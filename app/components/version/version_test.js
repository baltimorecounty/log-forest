'use strict';

describe('logForest.version module', function() {
  beforeEach(module('logForest.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
