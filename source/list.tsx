import * as React from 'react';

export interface ListProps {
	list: any[];
	template: { (item: any): JSX.Element };
}

export class List extends React.Component<ListProps, any> {
	render(): JSX.Element {
		return (
			<ul>
				{this.props.list.map(item => <li key={item}>{this.props.template(item)}</li>)}
			</ul>
		);
	}
}
