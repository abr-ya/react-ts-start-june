import React, {useEffect} from 'react';
import styles from './app.module.scss';
import {IApp} from './interfaces';
import Loader from './components/Loader/Loader';

const App = ({
	requestProductsSaga,
	loading,
	addToCart, delFromCart,
}: IApp) => {
	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const mainClasses = [styles.app, 'container'];
	const leftClasses = [styles.left, 'col-md-8'];
	const rightClasses = [styles.right, 'col-md-4'];

	const handleAdd = (id: number) => {
		console.log('handleAdd', id);
		addToCart(id);
	};

	const handleRemove = (id: number) => {
		console.log('handleRemove', id);
		delFromCart(id);
	};

	return (
		<div className={mainClasses.join(' ')}>
			<h1>React TS Start App</h1>
			<hr/>
				{loading
					? <Loader/>
					: (
					<div className='row'>
						<div className={leftClasses.join(' ')} onClick={() => handleAdd(1)}>
							Главная панель
						</div>
						<div className={rightClasses.join(' ')} onClick={() => handleRemove(1)}>
							Боковая панель
						</div>
					</div>
					)
				}
		</div>
	);
};

export default App;
