'use strict';

var React = require('react');

class PrimaryButton extends React.Component {
    render() {
        const { label, onClick } = this.props;
        return (React.createElement("button", { onClick: onClick }, label));
    }
}
//# sourceMappingURL=index.js.map

module.exports = PrimaryButton;
//# sourceMappingURL=index.js.map
