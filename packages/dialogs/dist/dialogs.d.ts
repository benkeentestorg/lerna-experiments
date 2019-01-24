import * as React from 'react';
export interface DialogProps {
    title: string;
}
export default class Dialog extends React.Component<DialogProps> {
    render(): JSX.Element;
}
