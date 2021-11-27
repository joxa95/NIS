import React from 'react';
import '../SCSS/Count.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Upcoming_ivents() {
	return (
		<div
			style={{
				width: '100%',
				height: '300px',
				display: 'flex',
				alignItems: 'center',
				backgroundImage: 'linear-gradient(to right, #8700FF, #5900FF)',
				opacity: '.6',
			}}
		>
			<Container
				maxWidth="md"
				sx={{
					height: '40%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{/* <Grid
					container
					columnSpacing={0}
					rowSpacing={0}
					// sx={{ height: '100%' }}
				> */}
				{/* <Grid item xs={12} sm={4} md={4}> */}
				<div className="Count_area">1</div>
				{/* </Grid> */}
				{/* <Grid item xs={12} sm={4} md={4}> */}
				<div className="Count_area">2</div>
				{/* </Grid> */}
				{/* <Grid item xs={12} sm={4} md={4}> */}
				<div className="Count_area">3</div>
				{/* </Grid> */}
				{/* </Grid> */}
			</Container>
		</div>
	);
}

export default Upcoming_ivents;
