import * as React from 'react';
export interface ButtonProps {
    label: string;
    onClick?: () => void;
}
export default class PrimaryButton extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
