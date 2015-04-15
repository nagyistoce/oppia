// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Directives for gadget panels.
 *
 * @author anuzis@google.com (Michael Anuzis)
 */

// EXPERIMENTAL: NOT FOR MERGER INTO ANY STABLE BRANCH.
// TODO(anuzis): Implement.

oppia.directive('gadgetPanel', ['$filter', function($filter) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '',
    controller: ['$scope', '$element', '$timeout', function($scope, $element, $timeout) {

    // JS object whose keys are panel names, values are lists of HTML strings
    // e.g. "<oppia-gadget-advice-bar title-with-value="..." default-icon-with-value="..."></oppia-gadget-advice-bar>"
    var panelContentsHtml = {};     // TODO(anuzis): Implement.

    }]
  };
}]);

// EXPERIMENTAL: NOT FOR MERGER INTO ANY STABLE BRANCH.