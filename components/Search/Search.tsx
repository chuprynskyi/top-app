import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import GlassIcon from './glass.svg';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q:search
			}
		});
	};

	const handKeyDown = (e: KeyboardEvent) => {
		if(e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<form className={cn(styles.search, className)} {...props} role='search'>
			<Input 
				className={styles.input}
				placeholder='Поиск...' 
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handKeyDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
				aria-label='Искать по сайту'
			>
				<GlassIcon/>
			</Button>
		</form>
	);
};