import * as React from 'react';
import { Busy } from './busy';

export class ToggleSpinner extends React.Component<any, { loading: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = { loading: false };
	}
	
	toggleSpinner = () => this.setState({ loading: !this.state.loading });

	render(): any {
		return (
			<div>
				<Busy loading={this.state.loading} />
				<button onClick={this.toggleSpinner}>Toggle</button>
			</div>
		);
	}
}
