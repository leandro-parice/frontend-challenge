import { useState } from 'react';
import { ColorList } from './components/ColorList';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { Header } from './components/Header';

function App() {
	const [follow, setFollow] = useState(false);
	const [color, setColor] = useState('skyblue');

	const handleColorChange = (newColor) => {
		setColor(newColor);
	};

	const toggleActive = () => {
		setFollow(!follow);
	};

	return (
		<>
			<ColorList onColorChange={handleColorChange} />
			<div className="card">
				<Header color={color} />
				<Section color={color} />
				<Footer follow={follow} color={color} toggleActive={toggleActive} />
			</div>
		</>
	);
}

export default App;
