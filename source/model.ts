import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface IAppState {
	loading: boolean;
}

export const state$ = new BehaviorSubject({ loading: false });
