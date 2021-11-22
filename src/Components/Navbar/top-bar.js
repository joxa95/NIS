import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import PhoneIcon from '@mui/icons-material/Phone';

export default function SimpleContainer() {
	const [age, setAge] = React.useState('');

	const handleChange = event => {
		setAge(event.target.value);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Box
					sx={{
						// bgcolor: 'transparent',
						bgcolor: 'blue',
						height: '70px',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '50%',
						}}
					>
						<Typography
							variant="subtitle2"
							style={{
								padding: '0 10px',
								marginRight: '10px',
								borderRight: '1px solid #B1B1B1',
							}}
						>
							<HelpIcon
								sx={{
									position: 'relative',
									top: '1px',
									height: '15px',
									width: '15px',
									color: 'white',
									backgroundColor: 'black',
									borderRadius: '50%',
								}}
								className="icon"
							/>{' '}
							Ask a Question
						</Typography>
						<Typography variant="subtitle2">
							<PhoneIcon
								sx={{
									position: 'relative',
									top: '1px',
									height: '15px',
									width: '15px',
									color: 'white',
									borderRadius: '50%',
								}}
							/>{' '}
							+998 99 322 01 13
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '50%',
						}}
					>
						<FormControl>
							<Select
								sx={{
									textDecoration: 'none',
									height: '20px',
									paddingRight: '10px',
									marginRight: '10px',
									borderRight: '1px solid #B1B1B1',
								}}
								variant="standard"
								value={age}
								onChange={handleChange}
								displayEmpty
								inputProps={{ 'aria-label': 'Without label' }}
							>
								<MenuItem value="">
									<Typography variant="subtitle2">English</Typography>
								</MenuItem>
								<MenuItem value={20}>
									<Typography variant="subtitle2">Uzbek</Typography>
								</MenuItem>
							</Select>
						</FormControl>
						<Typography
							variant="subtitle2"
							style={{
								height: '20px',
								paddingRight: '10px',
								marginRight: '10px',
								borderRight: '1px solid #B1B1B1',
							}}
						>
							Login
						</Typography>
						<Typography variant="subtitle2">Register</Typography>
					</div>
				</Box>
			</Container>
		</React.Fragment>
	);
}
