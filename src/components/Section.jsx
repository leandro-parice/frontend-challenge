import './Section.scss';

import {
	DribbbleLogo,
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	XLogo,
} from '@phosphor-icons/react';

export function Section({ color }) {
	return (
		<section>
			<div className="title">
				<h1>Leandro Parice</h1>
				<span>@campaojau</span>
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
				designs, leading art direction, and <br /> capturing portraits through
				photography.
			</p>
		</section>
	);
}
