import { SyntheticEvent } from 'react';

export function stopPropagation(wrappedFunction?: { (event?: SyntheticEvent<any>): any }): { (event: SyntheticEvent<any>): void } {
	return (event: SyntheticEvent<any>): void => {
		event.stopPropagation();
		// event.preventDefault();
		
		if (wrappedFunction) {
			wrappedFunction(event);
		}
	}	
}
