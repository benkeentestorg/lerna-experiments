var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var PrimaryButton = (function (_super) {
    __extends(PrimaryButton, _super);
    function PrimaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryButton.prototype.render = function () {
        var _a = this.props, label = _a.label, onClick = _a.onClick;
        return (React.createElement("button", { onClick: onClick }, label));
    };
    return PrimaryButton;
}(React.Component));
export default PrimaryButton;
//# sourceMappingURL=index.js.map