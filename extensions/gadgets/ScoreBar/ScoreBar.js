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
 * Directive for the ScoreBar gadget.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */

oppia.directive('oppiaGadgetScoreBar', [
  'oppiaHtmlEscaper', 'learnerParamsService', function(oppiaHtmlEscaper, learnerParamsService) {
    return {
      restrict: 'E',
      templateUrl: 'gadget/ScoreBar',
      controller: ['$scope', '$attrs', function ($scope, $attrs) {
        $scope.scoreBarTitle = oppiaHtmlEscaper.escapedJsonToObj($attrs.titleWithValue);
      }],
    }
  }
]);

/* EXPERIMENTAL: NOT FOR MERGER INTO ANY STABLE BRANCH.

// TODO(anuzis): Implement using learnerParamsService.

// Parameter associated with this ScoreBar. The ScoreBar's value
// updates automatically when this parameter's value changes.
//this.parameterName = ''; // read from paramName attribute.

// TODO(anuzis): This should be implemented as part of the editor config.
//this.setParameter = function(parameterName) {
  // TODO(anuzis): Verify this is a valid parameter name and watch for
  // parameter being deleted to warn of the need for setting a new one.
//  this.parameterName = parameterName;
//},

//this.getParameterValue = function() {
  // TODO(anuzis): Implement a method that returns the current value of
  // the associated parameter.
//},

//this._redrawScoreBar = function() {
  // TODO(anuzis): Implement a method that updates the visual rendering
  // of the ScoreBar to reflect the new value if Angular's Data Binding
  // doesn't achieve this automatically.
//},

// TODO(anuzis): Implement auto-update of ScoreBar tied to a parameter in $scope.
//$scope.$watch('getParameterValue()'), _redrawScoreBar);

EXPERIMENTAL: NOT FOR MERGER INTO ANY STABLE BRANCH.
*/ 