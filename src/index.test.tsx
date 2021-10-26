import '@testing-library/jest-dom/extend-expect';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { useFlash } from './';

const DURATION = 3000;

const App = () => {
	const [message, flash] = useFlash<string>('Hello', { duration: DURATION });

	return <button onClick={() => flash('Goodbye')}>{message}</button>;
};

jest.useFakeTimers();

describe('useFlash', () => {
	test('should set & reset the value', () => {
		render(<App />);

		const button = () => screen.getByRole('button');

		expect(button()).toHaveTextContent('Hello');

		act(() => {
			fireEvent.click(button());
		});

		expect(button()).toHaveTextContent('Goodbye');

		act(() => {
			jest.advanceTimersByTime(DURATION);
		});

		expect(button()).toHaveTextContent('Hello');
	});
});
