import { DeviderProps } from './Devider.props';
import styles from './Devider.module.css';
import cn from 'classnames';

export const Devider = ({ className, ...props }: DeviderProps): JSX.Element => {
	return (
		<hr className={cn(className, styles.hr)} {...props}/>
	);
};