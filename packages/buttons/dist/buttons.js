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

var styles = {"pink":"buttons_pink__2lS2y","red":"buttons_red__dvzCh","urgh":"buttons_urgh__1Tydr","another":"buttons_another__3aTQh","another1":"buttons_another1__gTP3n","another2":"buttons_another2__2ZeF5","validClassname3":"buttons_validClassname3__FE4ie"};

var PrimaryButton = (function (_super) {
    __extends(PrimaryButton, _super);
    function PrimaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryButton.prototype.render = function () {
        var _a = this.props, label = _a.label, className = _a.className, onClick = _a.onClick;
        return (createElement("button", { onClick: onClick, className: className + " " + styles.red }, label));
    };
    return PrimaryButton;
}(Component));

export default PrimaryButton;
//# sourceMappingURL=buttons.js.map
