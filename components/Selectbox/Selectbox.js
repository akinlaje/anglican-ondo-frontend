import { useState, useRef } from 'react';
import HandleClickOutside from '../../hoc/HandleClickOutside';
import { MdArrowDropDown as ArrowDown } from 'react-icons/md';

const Selectbox = ({ options, value, onChange, styles={}, placeholder }) => {
	const [open, setOpen] = useState(false);
	const optionListRef = useRef();

	const openDropdown = () => setOpen(true);

	const closeDropdown = () => setOpen(false);

	return (
		<div 
			className={[
				styles.Selectbox,
				open ? styles.Open : ''
			].join(' ')} 
			onClick={openDropdown}
		>
			<div className={styles.SelectboxDisplay}>
				{value?.id ? value.display : placeholder ? placeholder : 'Select'}
				<ArrowDown
					size='1.5em'
					style={{
							transformOrigin: '50% 50%',
							transform: open ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
							transition: 'transform ease-out 300ms',
					}}
					className={styles.SelectboxArrowDown} 
				/>
			</div>
			{open && (
				<HandleClickOutside 
					container={optionListRef} 
					onOutsideClick={closeDropdown}
				>
					<ul 
						ref={optionListRef} 
						className={styles.SelectboxDropdown} 
						onClick={e => e.stopPropagation()}
						>
						{options.map(option => {
							const { display, id } = option;
							const clicked = () => {
								onChange(option);
								closeDropdown();
							}
							return (
								<li 
									key={id} 
									onClick={clicked} 
									className={[
										styles.SelectboxOption,
										value.id === id ? styles.Selected : ''
									].join(' ')}
								>
									{display}
								</li>
							)
						})}
					</ul>
				</HandleClickOutside>
			)}
		</div>
	)
}

export default Selectbox;