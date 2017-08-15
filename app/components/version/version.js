'use strict';

angular.module('logForest.version', [
  'logForest.version.interpolate-filter',
  'logForest.version.version-directive'
])

.value('version', '0.1');
