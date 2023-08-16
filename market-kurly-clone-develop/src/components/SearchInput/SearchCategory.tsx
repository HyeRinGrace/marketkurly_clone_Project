// import * as React from 'react';
import styles from '@components/SearchInput/SearchInput.module.css';

const CategoryFilter = () => {
	return (
		<nav className={styles.nav}>
			<menu className={styles.menu}>
				<li className={styles.menuItem}>
					<button className={styles.button}>가나다순</button>
				</li>
				<li className={styles.menuItem}>
					<button className={styles.button}>상품 많은순</button>
				</li>
			</menu>
			<menu className={styles.menu}>
				<li className={styles.menuItem}>
					<button type='button' className={styles.button}>
						전체
					</button>
				</li>
				{/* ... 나머지 li 태그와 버튼들 */}
				<li className={styles.menuItem}>
					<button type='button' className={styles.button}>
						브랜드 더보기
					</button>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						stroke='#999'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.svgIcon}
					>
						<path d='M5 11L9 7L13 11' stroke='#999' strokeWidth='1.2' />
					</svg>
				</li>
			</menu>
		</nav>
	);
};

export default CategoryFilter;
