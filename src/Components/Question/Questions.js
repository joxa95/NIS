import React from 'react';
import { Typography, Container } from '@mui/material';
import QuestionCard from './QuestionsCard';
import Grid from '@mui/material/Grid';
import icon1 from '../images/icon/icon1.png';
import icon2 from '../images/icon/icon2.png';
import icon3 from '../images/icon/icon3.png';
import icon4 from '../images/icon/icon4.png';
import Accordion from './QuestionAcord';
import Contact from './Contact';
import Count from './Count';
import Top_bar from '../Navbar/top_bar_white';
import Navbar from '../Navbar/Navbar_white';
import Footer from '../Footer/LastPage';
import '../SCSS/Questions.scss';

export default function Question() {
	const Typ1 = 'Our Philosophy';
	const Typ2 = "Kingster's Principle";
	const Typ3 = 'Key of Scuccess';

	const Acor1 = "Why won't ny payment go through?";
	const Acor2 = 'Hwo do i get a refund?';
	const Acor3 = 'Hwo do i redeem a coupon?';
	const Acor4 = "Why aren't my courses showing in my account?";
	const Acor5 = 'Changing account name';

	const count1 = '3000+';
	const count2 = '2500+';
	const count3 = '1500+';
	const count4 = '100+';

	const pvalue1 = 'Completed Projects';
	const pvalue2 = 'Happy Clients';
	const pvalue3 = 'Questions Answered';
	const pvalue4 = "Ordered Coffee's";

	return (
		<div>
			<div style={{}}>
				<Top_bar />
				<Navbar />
				<div className="CoursesPage">
					<div className="backTypo">
						<Typography
							className="questions"
							align="center"
							variant="h3"
							fontWeight="600"
						>
							Frequently Asked Questions
						</Typography>
					</div>
				</div>
				<Container sx={{ pt: 3 }}>
					<Grid container columnSpacing={4}>
						<Grid item xs={12} md={3}>
							<QuestionCard Icons={icon1} Typo={Typ1} />
						</Grid>
						<Grid item xs={12} md={3}>
							<QuestionCard Icons={icon2} Typo={Typ2} />
						</Grid>
						<Grid item xs={12} md={3}>
							<QuestionCard Icons={icon3} Typo={Typ3} />
						</Grid>
						<Grid item xs={12} md={3}>
							<QuestionCard Icons={icon4} Typo={Typ1} />
						</Grid>
					</Grid>
				</Container>
			</div>
			<Container>
				<br />
				<Grid container columnSpacing={3} rowSpacing={3}>
					<Grid item xs={12} md={8}>
						<Typography
							variant="h4"
							fontWeight="600"
							style={{ borderLeft: '4px solid gold', paddingLeft: '5px' }}
						>
							Asked <span style={{ fontWeight: '100' }}>Questions</span>
						</Typography>
						<br />
						<Typography vraiant="body2">
							Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
						</Typography>
						<br />
						<Typography vraiant="body2">
							Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
						</Typography>
						<Accordion Acor={Acor1} />
						<Accordion Acor={Acor2} />
						<Accordion Acor={Acor3} />
						<Accordion Acor={Acor4} />
						<Accordion Acor={Acor5} />
						<br />
						<Typography vraiant="body2">
							Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
						</Typography>
						<br />
					</Grid>
					<Grid item xs={12} md={4}>
						<Contact />
					</Grid>
				</Grid>
			</Container>
			<br />
			<div style={{ padding: '30px 0', background: 'rgb(200,200,300)' }}>
				<Container>
					<Grid container rowSpacing={3} columnSpacing={3}>
						<Grid item xs={12} md={3}>
							<Count pvalue={pvalue1} count={count1} />
						</Grid>
						<Grid item xs={12} md={3}>
							<Count pvalue={pvalue2} count={count2} />
						</Grid>
						<Grid item xs={12} md={3}>
							<Count pvalue={pvalue3} count={count3} />
						</Grid>
						<Grid item xs={12} md={3}>
							<Count pvalue={pvalue4} count={count4} />
						</Grid>
					</Grid>
				</Container>
			</div>
			<Footer />
		</div>
	);
}
