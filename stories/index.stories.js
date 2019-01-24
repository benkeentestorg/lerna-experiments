import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryButton from '../packages/buttons/dist/buttons';
import '../packages/buttons/dist/buttons.css';

import Dialog from '../packages/dialogs/dist/dialogs';
import '../packages/dialogs/dist/dialogs.css';


storiesOf('PrimaryButton', module)
    .add('with text', () => <PrimaryButton onClick={action('clicked')} label="First button" />)
    .add('Second button', () => <PrimaryButton onClick={action('clicked')} label="Another button" />);

storiesOf('Dialog', module)
    .add('example', () => <Dialog title="Okay not really a dialog component but whatever" />);
