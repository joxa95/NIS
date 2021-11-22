import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './nav.scss';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpeakersIcon from '@mui/icons-material/ConnectWithoutContact';
import ContactIcon from '@mui/icons-material/PermContactCalendar';
import LocationIcon from '@mui/icons-material/LocationOn';
import BlogIcon from '@mui/icons-material/StickyNote2';
import { useEffect, useRef } from 'react';
import logo from '../images/logo-2.png';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';

import { Link } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	let menuRef = useRef();

	useEffect(() => {
		document.addEventListener('mousedown', event => {
			if (!menuRef.current.contains(event.target)) {
				setOpen(false);
			}
		});
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Container maxWidth="lg">
			<Box ref={menuRef} sx={{ display: 'flex' }}>
				{/* <CssBaseline /> */}
				<AppBar
					sx={{
						backgroundColor: 'transparent',
						color: 'black',
						boxShadow: '0',
						borderTop: '1px solid #C4C4C4',
						borderBottom: '1px solid #C4C4C4',
					}}
					color="success"
					position="sticky"
					open={open}
					// onClose={handleDrawerClose}
				>
					<Toolbar
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							...(open && { ml: -30 }),
							backgroundColor: 'gray',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<img style={{ width: '100px' }} src={logo} />
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<FacebookIcon className="navIcons" />
							<TelegramIcon className="navIcons" />
							<InstagramIcon className="navIcons" />
							<SearchIcon className="navIcons" />
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{ ...(open && { display: '' }) }}
							>
								<MenuIcon
									sx={{
										fontSize: '25px',
										color: 'white',
										...(open && { display: 'none' }),
									}}
								/>
								<CloseIcon
									sx={{
										display: 'none',
										...(open && { display: '', color: 'white' }),
									}}
								/>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>

				<Drawer
					sx={{
						position: 'absolute',
						width: drawerWidth,
						// flexShrink: 1,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
							backgroundColor: '#4c4c4c',
						},
					}}
					// onClose={handleDrawerClose}
					// variant="persistent"
					anchor="left"
					open={open}
				>
					<DrawerHeader>
						<IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div className="link">
							<HomeIcon className="icons " /> Home
						</div>
						<div className="link">
							<SpeakersIcon className="icons" /> Speakers
						</div>
						<div className="link">
							<ListAltIcon className="icons" /> Schedule
						</div>
						<div className="link">
							<LocationIcon className="icons" /> Location
						</div>
						<div className="link">
							<BlogIcon className="icons" /> Blog
						</div>
						<div className="link">
							<ContactIcon className="icons" /> Contacts
						</div>
					</List>
					<Divider />
				</Drawer>
				<Main style={{ padding: '0' }} open={open}>
					<DrawerHeader />
				</Main>
			</Box>
		</Container>
	);
}
