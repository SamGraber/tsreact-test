import * as React from 'react';

import { Hello } from './hello';
import { Button, ButtonLink } from './button';
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
			<Button action={() => console.log('Simple button')}>Simple button</Button>
			<Button type="primary flat" size="lg" action={() => console.log('Larg primary button')}>Large primary button</Button>
			<Button disabled={true} action={() => console.log('Disabled button')}>Disabled button</Button>
			<ButtonLink link="http://google.com" newTab={true}>Link button</ButtonLink>
			<ButtonLink type="primary flat" size="lg" link="http://google.com">Large primary link button</ButtonLink>
			<ButtonLink disabled={true} link="http://google.com">Disabled link button</ButtonLink>
		</div>);
	}
}
