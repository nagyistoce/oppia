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

oppia.directive('oppiaGadgetPanel', function() {
  return {
    restrict: 'E',
    scope: {
      panelContents: '&',
    },
    templateUrl: 'components/gadgetPanel'
  };
});

oppia.directive('oppiaGadget', function() {
  return {
    restrict: 'E',
    scope: {
      gadgetId: '&',
      gadgetCustomizationArgs: '&',
      showInStates: '&'
    },
    templateUrl: 'components/gadget',
    controller: ['$scope', '$filter', 'oppiaPlayerService', function($scope, $filter, oppiaPlayerService) {
      // Formats CustomizationArgSpecs as angular attributes for the given element.
      // TODO(sll): Refactor; this duplicates the same method in PlayerServices.js.
      var _formatCustomizationArgAttributesForElement = function(element, customizationArgSpecs) {
        for (var caSpecName in customizationArgSpecs) {
          var caSpecValue = customizationArgSpecs[caSpecName].value;
          element.attr(
            $filter('camelCaseToHyphens')(caSpecName) + '-with-value',
            oppiaHtmlEscaper.objToEscapedJson(caSpecValue));
        }
        return element;
      }

      var el = $(
        '<oppia-gadget-' + $filter('camelCaseToHyphens')($scope.gadgetId()) + '>');
      el = _formatCustomizationArgAttributesForElement(el, $scope.gadgetCustomizationArgs());
      $scope.gadgetHtml = ($('<div>').append(el)).html();

      $scope.$watch(function() {
        return oppiaPlayerService.getCurrentStateName();
      }, function(currentStateName) {
        $scope.isVisible = $scope.showInStates().indexOf(currentStateName) !== -1;
      });
    }]
  };
});
