import * as React from 'react';
export interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}
export default class PrimaryButton extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
