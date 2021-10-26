import { useRef, useCallback, useState } from 'react';

type Timeout = ReturnType<typeof setTimeout>;

type Options = {
	duration?: number;
};

export const useFlash = <T>(
	initialValue: T,
	options?: Options,
): [T, (props: T) => void] => {
	const { duration = 1000 } = options || {};
	const [state, setState] = useState<T>(initialValue);
	const timeout = useRef<Timeout | null>();

	const flash = useCallback(
		(props: T) => {
			setState(props);

			timeout.current = setTimeout(() => {
				setState(initialValue);
			}, duration);
		},
		[state],
	);

	return [state, flash];
};
