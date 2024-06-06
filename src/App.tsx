import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Relogio = styled.h2`
font-size: 150px;
color: purple;
`;

const Container = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width: 100%;
height: 100%;
background-color: black;
`;

export default () => {

	const [hora, setHora] = useState(23);
	const [minuto, setMinuto] = useState(59);
	const [segundo, setSegundo] = useState(58);

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundo(segundo + 1);

			if (segundo == 59) {
				setSegundo(0);
				setMinuto(minuto + 1);
			}

			if (minuto == 60) {
				setMinuto(0);
				setHora(hora + 1);
				if(hora == 23)
				setHora(0)
			}


		}, 1000);
		return( ) => clearInterval(interval);
	},);

	return (
		<Container>
			<Relogio>{hora}:{minuto}:{segundo}</Relogio>
		</Container>
	)
}