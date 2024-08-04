import {
	DribbbleLogo,
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	XLogo,
} from '@phosphor-icons/react';

import headerBackground from './assets/header.svg';
import { useState } from 'react';

function App() {
	const [follow, setFollow] = useState(false);
	const [color, setColor] = useState('skyblue');

	const toggleActive = () => {
		setFollow(!follow);
	};

	return (
		<>
			<ul className="colors">
				<li>
					<button className="skyblue" onClick={() => setColor('skyblue')}>
						#3498db
					</button>
				</li>
				<li>
					<button
						className="emeraldgreen"
						onClick={() => setColor('emeraldgreen')}
					>
						#2ecc71
					</button>
				</li>
				<li>
					<button
						className="carrotorange"
						onClick={() => setColor('carrotorange')}
					>
						#e67e22
					</button>
				</li>
				<li>
					<button
						className="amethystpurple"
						onClick={() => setColor('amethystpurple')}
					>
						#9b59b6
					</button>
				</li>
				<li>
					<button
						className="raspberrypink"
						onClick={() => setColor('raspberrypink')}
					>
						#ec3b7b
					</button>
				</li>
			</ul>
			<div className="card">
				<svg
					viewBox="0 0 191 107"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={color}
				>
					<rect width="191" height="107" />
					<path
						className="p1"
						d="M99.207 91.2293C98.1695 90.5692 97.242 89.9622 96.4271 89.429C95.9049 89.0872 95.429 88.7758 95 88.5C90.7257 85.7523 89.4342 86.7329 86.2307 89.1655C84.1878 90.7167 81.3674 92.8583 76.5 95C66.0707 99.5889 41.719 106.614 23.773 105.041C13.3603 102.371 5.6143 96.39 0 89.3246V0H191V91.241C184.102 101.496 170.272 106.5 150.5 106.5C128.678 106.5 109.142 96.976 99.207 91.2293Z"
						fill="#EB3A7E"
					/>
					<path
						className="p2"
						d="M0 85.2225C4.01466 89.8307 8.96249 93.8296 15 96.5C38.1603 106.744 61.3206 107.069 83.774 96.0624C85.6255 94.9354 87.18 93.8418 88.5827 92.855C91.0978 91.0857 93.1248 89.6598 95.5 89C95.6226 89.0766 95.7484 89.155 95.8776 89.2351C116.182 78.1319 125.705 85.2878 132.254 90.2087C132.859 90.6637 133.439 91.0995 134 91.5C135.368 92.4773 137.214 94.0467 139.466 95.9619C142.969 98.9406 147.456 102.755 152.659 106.48C171.281 106.125 184.356 101.119 191 91.241V0H1.16146C0.778702 1.19817 0.391187 2.41226 0 3.63881V85.2225Z"
						fill="#B94661"
					/>
					<path
						className="p3"
						d="M0 84.9159C11.6479 95.4982 24.289 104.1 34.5 104.5C46.8674 104.985 60.2934 98.0605 74.1504 90.9136C88.8647 83.3247 104.065 75.485 119 76C136.024 76.587 149.602 91.9924 161.352 105.324C161.514 105.508 161.676 105.692 161.838 105.875C175.62 104.243 185.507 99.4066 191 91.241V0H0V84.9159Z"
						fill="#992D45"
					/>
				</svg>
				<header>
					<div className="avatar">
						<img src="https://github.com/leandro-parice.png" alt="" />
					</div>
				</header>
				<section>
					<div className="title">
						<h1>Johnny Roggers</h1>
						<span>@johnnyroggers</span>
					</div>
					<ul className={color}>
						<li>
							<a href="#">
								<FacebookLogo weight="fill" size={24} />
							</a>
						</li>
						<li>
							<a href="#">
								<LinkedinLogo weight="fill" size={24} />
							</a>
						</li>
						<li>
							<a href="#">
								<XLogo weight="fill" size={24} />
							</a>
						</li>
						<li>
							<a href="#">
								<InstagramLogo weight="fill" size={24} />
							</a>
						</li>
						<li>
							<a href="#">
								<DribbbleLogo weight="fill" size={24} />
							</a>
						</li>
					</ul>
					<p>
						Crafting brand and communication strategies, <br /> creating visual
						designs, leading art direction, and <br /> capturing portraits
						through photography.
					</p>
				</section>
				<footer>
					<button
						className={follow ? `${color} active` : color}
						onClick={toggleActive}
					>
						Follow
					</button>
					<button>Message</button>
				</footer>
			</div>
		</>
	);
}

export default App;
