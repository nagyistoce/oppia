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
 * Directive for the PencilCode gadget.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */

oppia.directive('oppiaGadgetPencilCode', [
  'oppiaHtmlEscaper', 'learnerParamsService', function(oppiaHtmlEscaper, learnerParamsService) {
    return {
      restrict: 'E',
      templateUrl: 'gadget/PencilCode',
      controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        var _initialCode = oppiaHtmlEscaper.escapedJsonToObj($attrs.initialCodeWithValue);

        var pce = new PencilCodeEmbed($element[0].children[0]);

        // TODO(sll): this is not working.
        pce.on('updated', function(code) {
          console.log('new code: ' + code);
        });

        pce.on('load', function() {
          console.log('load complete');
          pce.showNotification('Pay attention to the Turtle!');
          setTimeout(function(){
            pce.hideNotification();
            pce.beginRun();
          }, 2000);
        });
        pce.beginLoad(_initialCode);
      }],
    }
  }
]);
