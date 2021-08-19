import React, {Fragment} from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'


const Header = () => {
    return (
        <Fragment>
            <AppBar position = "static">
                <Toolbar className = {classes.toolbar}>
                    <Typography variant = "h5"> 

                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header
