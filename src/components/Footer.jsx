import './Footer.scss';

export function Footer({ follow, color, toggleActive }) {
	return (
		<footer>
			<button
				className={follow ? `${color} active` : color}
				onClick={toggleActive}
			>
				Follow
			</button>
			<button>Message</button>
		</footer>
	);
}
