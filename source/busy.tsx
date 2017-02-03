import * as React from 'react';

export const Busy = (props: { loading: boolean }) => props.loading ? <h2>Loading...</h2> : null;