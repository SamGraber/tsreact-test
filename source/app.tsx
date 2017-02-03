import * as React from 'react';

import { Hello } from './hello';
import { ToggleSpinner } from './toggleSpinner';
import { state$ } from './model';

export class App extends React.Component<any, any> {
	componentWillMount(): void {
		this.setState({ loading: false });
		state$.subscribe(state => this.setState(state));
	}
	
	render(): any {
		return (
		<div>
			<Hello compiler="Typescript" />
			<ToggleSpinner loading={this.state.loading} toggleSpinner={() => state$.next({ loading: !this.state.loading })} />
		</div>);
	}
}
