import * as React from 'react';

import { Hello } from './hello';
import { Button, ButtonLink } from './button';
import { Parent } from './parent';
import { Card, Header, Body, Footer } from './card';
import { List } from './list';
import { stopPropagation } from './events';
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
			<Card>
				<Header>Header</Header>
				<Body>Body</Body>
				<Footer>Footer</Footer>
			</Card>
			<List list={[1, 2, 3]}
				  template={num => <em>Item #{num}</em>}></List>
			<div onClick={() => console.log('Click propagated')}>
				Outer area
				<div>
					Inner area
				</div>
			</div>
			<div onClick={() => console.log('Click propagated')}>
				Outer area (stop propagation)
				<div onClick={stopPropagation(() => console.log('Stopped click'))}>
					Inner area
				</div>
			</div>
			<div {...{ onClick: () => console.log('Spread click'), className: 'spread' }}>Spread test</div>
		</div>);
	}
}
