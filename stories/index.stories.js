import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../packages/buttons/dist/buttons.css';

import PrimaryButton from '../packages/buttons/dist/buttons';

storiesOf('PrimaryButton', module)
    .add('with text', () => <PrimaryButton onClick={action('clicked')} label="My own button" />)
    .add('Second button', () => <PrimaryButton onClick={action('clicked')} label="Another button" />);
