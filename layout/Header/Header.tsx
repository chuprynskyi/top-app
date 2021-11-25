import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '../logo.svg';
import cn from 'classnames';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpend, setIsOpend] =useState<boolean>(false);
	const router = useRouter();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		setIsOpend(false);
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: shouldReduceMotion ? 1 : 0,
			x: '100%'
		}
	};

	return (
		<div className={cn(className, styles.header)} {...props}>
			<Logo /> 
			<ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpend(true)} />
			<motion.div 
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpend ? 'opened' : 'closed'}
			>
				<Sidebar />
				<ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpend(false)} />
			</motion.div>
		</div>
	);
};