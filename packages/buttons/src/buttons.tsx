import * as React from 'react';

export interface ButtonProps {
    // icon?: string;
    // iconColor?: string;
    // iconSize?: number | string;
    label: string;
    // buttonStyle?: React.CSSProperties;
    // tooltip?: string;
    onClick?: () => void;
}


export default class PrimaryButton extends React.Component <ButtonProps> {
    render () {
        const { label, onClick } = this.props;
        return (
            <button onClick={onClick}>{label}!!</button>
        );
    }
}
