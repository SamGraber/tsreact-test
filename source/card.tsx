import * as React from 'react';

export interface CardProps {
	children?: React.ReactChildren;
}

export interface CardState {
	isOpen: boolean;
}

export class Header extends React.Component<any, any> { 
	render() { 
		return <div>{this.props.children}</div>;
	}
}

export class Body extends React.Component<any, any> { 
	render() { 
		return <div>{this.props.children}</div>;
	}
}

export class Footer extends React.Component<any, any> { 
	render() { 
		return <div>{this.props.children}</div>;
	}
}

export class Card extends React.Component<CardProps, CardState> {
	state = { isOpen: false };

	toggleBody = (): void => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	header = (): any => {
		return React.Children.toArray(this.props.children).filter((child: any) => child.type === Header);
	}

	body = (): any => {
		return React.Children.toArray(this.props.children).filter((child: any) => child.type === Body);
	}

	footer = (): any => {
		return React.Children.toArray(this.props.children).filter((child: any) => child.type === Footer);
	}

	render(): JSX.Element {
		return (
			<div>
				<div onClick={this.toggleBody}>
					{this.header()}
				</div>
				{this.state.isOpen ?
				<div>
					{this.body()}
					{this.footer()}
				</div>
				: null}
			</div>
		);
	}
}
