import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './Styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCKVsHCGY6B_vk_0YlNXFN05R6xI_SAQC4' }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={(e) => {}}
				onChildClick={''}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
