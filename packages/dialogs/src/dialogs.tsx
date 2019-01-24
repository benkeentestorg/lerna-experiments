import * as React from 'react';
import styles from './dialogs.scss';

export interface DialogProps {
    title: string;
}

export default class Dialog extends React.Component <DialogProps> {
    render () {
        const { title } = this.props;
        return (
            <div className={styles.dialog}>
                <h1>{title}</h1>
            </div>
        );
    }
}
