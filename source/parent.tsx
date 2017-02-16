import * as React from 'react';

export const Parent = ({ children }: { children?: any}) => {
	// console.log('children', children);
	// console.log('count', React.Children.count(children));
	// // console.log('only', React.Children.only(children));
	// console.log('toArray', React.Children.toArray(children));
	
	return <ul>{React.Children.map(children, child => <li>{child}</li>)}</ul>;
};
