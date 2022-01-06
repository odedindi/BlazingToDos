**Blazing Todos App**

A multiplatform Todo PWA prototype.
[Live Demo](https://odedindi-todos.vercel.app/)

## App Features

- todo list: done.
- graphs showing statistics regarding the user's todos: under construction.

## Tech/framework used

- TypeScript
- Next.js
- React Context Store
- Styled-Components
- Rxjs
- D3

## Code Examples

- React Context, useReducer based store together with a useStore hook for blazing fast interface that is also easy to use and to re-configure:

```shell
const StoreContext = React.createContext<StoreContext>(undefined!);
const { Provider } = StoreContext;

const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(storeReducer, getInitialState());

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useStore = () => React.useContext(StoreContext);

/*
then, where and when needed call the useStore hook, for example:

	const {
		state: { filteredTodos, filter, mode, searchQuery, todos },
		dispatch,
	} = useStore();

*/
```

- Create custom hooks for easy use:

```shell

type ReturnVoid = { (): void };
type ReturnPromise = { (): Promise<void> };
type BtnCode = string;

const useKeyboardListener = (
	fn: ReturnVoid | ReturnPromise,
	btnCode: BtnCode,
	withCtrlKey?: boolean,
): void => {
	React.useEffect(() => {
		const keyboardListener = ({ code, ctrlKey }: KeyboardEvent) => {
			if (withCtrlKey) {
				if (ctrlKey && code === btnCode) {
					fn();
				}
			} else if (code === btnCode) fn();
		};
		document.addEventListener('keydown', keyboardListener);
		return () => {
			document.removeEventListener('keydown', keyboardListener);
		};
	}, [btnCode, fn, withCtrlKey]);
};

/*
use example:

const handleSubmit = (e) => {....}
useKeyboardListener(handleSubmit, 'Enter'); // call handleSubmit when Enter key is pressed
useKeyboardListener(handleSubmit, 'Enter', true); // call handleSubmit onle when Enter and Ctrl keys are pressed

*/
```

- Take advantage of rxjs interface for handling user input:

```shell
	const [userInput$] = React.useState(() => new BehaviorSubject(''));

	userInput$.pipe(
		map((s: string) => s.trim()),
		distinctUntilChanged(),
		debounceTime(250),
	);

	const handleInput = React.useCallback(
		({ target }: React.ChangeEvent<HTMLInputElement>) =>
			userInput$.next(target.value),
		[userInput$],
	);

	const handleSubmit = React.useCallback(() => {
		userInput$
			.subscribe((input) => {
				if (!input.trim()) return inputRef.current.focus();
				if (isAddMode) {
					dispatch(Action.addTodo(input));
					inputRef.current.value = '';
				} else dispatch(Action.searchTodo(input));
			})
			.unsubscribe();
		userInput$.next('');
	}, [dispatch, isAddMode, userInput$]);

```

## Installing / Getting Development Started

clone the project and install all needed dependencies

```shell

git clone git@github.com:odedindi/BlazingToDos.git

cd BlazingToDos/

yarn install

yarn dev

```

## Local Environment Configuration

For auth, the app uses github, if needed auth is needed, please create a new repo on github and on your personal settings and generate both github id and github client secret and thos on to the env.local file

# Contributing

If you'd like to contribute, please fork the repository and use a feature
branch.
Pull requests are warmly welcome.

## Links

- Project homepage: https://github.com/odedindi/BlazingTodos
- Repository: git@github.com:odedindi/BlazingToDos.git
- Issue tracker: https://github.com/odedindi/BlazingToDos/issues
  - In case of sensitive bugs like security vulnerabilities, please contact me at
    odedindi@gmail.com directly instead of using issue tracker.
- I value the care and effort to improve the security and privacy of this project!

## Licensing

The code in this project is licensed under MIT [license](https://github.com/odedindi/BlazingTodos/blob/main/LICENSE).
