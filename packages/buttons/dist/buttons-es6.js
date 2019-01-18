import { createElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".buttons__pink___2lS2y {\n  color: pink; }\n  .buttons__pink___2lS2y .buttons__subElement___2qy3C {\n    font-style: italic; }\n\n.buttons__another___3aTQh {\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBRTtFQUNkO0lBQ0UsbUJBQW1CLEVBQUU7O0FBRXpCO0VBQ0UsbUJBQW1CLEVBQUUiLCJmaWxlIjoiYnV0dG9ucy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbmsge1xuICBjb2xvcjogcGluazsgfVxuICAucGluayAuc3ViRWxlbWVudCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cbi5hbm90aGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XG4iXX0= */";
styleInject(css);

var PrimaryButton = (function (_super) {
    __extends(PrimaryButton, _super);
    function PrimaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryButton.prototype.render = function () {
        var _a = this.props, label = _a.label, className = _a.className, onClick = _a.onClick;
        return (createElement("button", { onClick: onClick, className: className + " " + undefined }, label));
    };
    return PrimaryButton;
}(Component));

export default PrimaryButton;
//# sourceMappingURL=buttons-es6.js.map
