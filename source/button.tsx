import * as React from 'react';

import { Busy } from './busy';

const buttonClassPrefix: string = 'btn-';
const defaultButtonType: string = 'default';

export function configureSize(size: string): string {
	return size != null && size !== ''
		? buttonClassPrefix + size
		: null;
}

export function configureTypes(type: string): string {
	type = type || defaultButtonType;
	let typesList: string[] = type.split(' ');
	typesList.forEach((type: string, index: number): void => {
		//the for each for places that used btn-block for example in the type attribute do not break
		if (type.indexOf(buttonClassPrefix) === -1) {
			type = buttonClassPrefix + type;
		}
		typesList[index] = type;
	});
	return typesList.join(' ');
}

export const Button = ({ action, type, disabled, size, children }: { action: { (): void }, type?: string, disabled?: boolean, size?: string, children?: any }) => (
	<button type="button"
			className={`btn ${configureTypes(type)} ${configureSize(size)}`}
			onClick={action}
			disabled={disabled}>
		{children}
	</button>
);

const target = (newTab: boolean) => newTab ? '_blank' : '_self';

export const ButtonLink = ({ link, newTab, type, disabled, size, children }: { link: string, newTab?: boolean, type?: string, disabled?: boolean, size?: string, children?: any }) => (
	<a className={`btn ${configureTypes(type)} ${configureSize(size)}`}
			href={link}
			target={target(newTab)}
			disabled={disabled}>
		{children}
	</a>
);

function waitOnPromise(): void {

}

export const ButtonAsync = ({ action = () => new Promise(() => null), type, disabled, size, children }: { action: { (): Promise<any> }, type?: string, disabled?: boolean, size?: string, children?: any }) => (
	<Button action={waitOnPromise} type={type} disabled={disabled} size={size}>
		<span className="btn-content">{children}</span>
		<Busy loading={true}></Busy>
	</Button>
	/*<button type="button"
			className={`btn ${configureTypes(type)} ${configureSize(size)}`}
			onClick={action}
			disabled={disabled}>
		{children}
	</button>*/
);
