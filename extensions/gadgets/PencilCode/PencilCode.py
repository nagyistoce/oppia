# coding: utf-8
#
# Copyright 2014 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from extensions.gadgets import base


class PencilCode(base.BaseGadget):
    """Gadget for providing a Pencil Code sandbox."""

    name = 'PencilCode'
    description = 'An interactive Pencil Code editor.'
    _dependency_ids = []

    _customization_arg_specs = [{
        'name': 'initialCode',
        'description': 'Initial code for the pencil code editor.',
        'schema': {
            'type': 'unicode',
            'ui_config': {
                'rows': 10,
            }
        },
        'default_value': '\n'.join([
          'speed 5',
          'dot yellow, 160',
          'fd 20',
          'rt 90',
          'fd 25',
          'dot black, 20',
          'bk 50',
          'dot black, 20',
          'bk 5',
          'rt 90',
          'fd 40',
          'pen black, 7',
          'lt 30',
          'lt 120, 35'
        ])
    }]

    # Constants for height and width.
    # Static placeholders for now.
    _HEIGHT = 500
    _WIDTH = 500

    def get_width(self, customization_args):
        """Returns integer representing width in pixels."""
        return self._WIDTH

    def get_height(self, customization_args):
        """Returns integer representing height in pixels."""
        return self._HEIGHT
