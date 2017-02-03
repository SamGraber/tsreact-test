import * as React from 'react';
import { Busy } from './busy';

export const ToggleSpinner = (props: { loading: boolean, toggleSpinner: { (): void } }) => (
	<div>
		<Busy loading={props.loading} />
		<button onClick={props.toggleSpinner}>Toggle</button>
	</div>
);
