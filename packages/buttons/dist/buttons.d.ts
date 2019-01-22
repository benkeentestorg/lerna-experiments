import * as React from 'react';
export interface ButtonProps {
    label: string;
    className?: string;
    buttonStyle?: React.CSSProperties;
    onClick?: () => void;
}
export default class PrimaryButton extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
