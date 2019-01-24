import * as React from 'react';
import styles from './buttons.scss';

export interface ButtonProps {
    label: string;
    className?: string;
    buttonStyle?: React.CSSProperties;
    onClick?: () => void;
}

export default class PrimaryButton extends React.Component <ButtonProps> {
    render () {
        const { label, className, onClick } = this.props;
        return (
            <button onClick={onClick} className={`${className} ${styles.red}`}>{label}</button>
        );
    }
}
