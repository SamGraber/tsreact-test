import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './hello';
import { ToggleSpinner } from './composite';

ReactDOM.render(
	<div>
		<Hello compiler="Typescript" />
		<ToggleSpinner />
	</div>,
	document.getElementById('container')
);
