import './ColorList.scss';

export function ColorList({ onColorChange }) {
	const colorsName = [
		'skyblue',
		'emeraldgreen',
		'carrotorange',
		'amethystpurple',
		'raspberrypink',
	];

	const handleClick = (color) => {
		onColorChange(color);
	};

	return (
		<ul className="colors">
			{colorsName.map((item, index) => (
				<li key={index}>
					<button className={item} onClick={() => handleClick(item)}>
						{item}
					</button>
				</li>
			))}
		</ul>
	);
}
