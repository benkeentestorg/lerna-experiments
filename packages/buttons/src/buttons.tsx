import * as React from 'react';

export interface ButtonProps {
    // icon?: string;
    // iconColor?: string;
    // iconSize?: number | string;
    label: string;
    className?: string;
    // buttonStyle?: React.CSSProperties;
    onClick?: () => void;
}


export default class PrimaryButton extends React.Component <ButtonProps> {
    render () {
        const { label, className, onClick } = this.props;
        return (
            <button onClick={onClick} className={className}>{label}</button>
        );
    }
}
