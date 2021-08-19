import React from 'react'
import GoogleMapReact from 'google-map-react'; 
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './Styles'

const Map = () => {
    const classes = useStyles(); 
    const isMobile = useMediaQuery('(min-width:600px)'); 

    const coordinates = { lat :0 , long:0}
    const API_KEY =  "AIzaSyCKVsHCGY6B_vk_0YlNXFN05R6xI_SAQC4"

    return (
        
           <div className = {classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys = {{key: API_KEY}}
                    defaultCenter = {coordinates}
                    center = {coordinates}
                    defaultZoom = {14}
                    margin={[50, 50, 50, 50]}
                    options = {''}
                    onChange = {''}
                    onChildClick = {''}
                >
                    
                </GoogleMapReact>
           </div> 
        
    )
}

export default Map
