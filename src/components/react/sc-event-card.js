import * as React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, CardHeader, Badge } from '@mui/material'
import placeholderImg from '../../../static/images/chef-bryan-entertainment.jpg'
import '../../scss/react.scss'

const eventCard = () => {
    const [isActive, setActive] = useState(false)

    const handleButtonClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
        <Card className="event-card">
            <CardContent className="event-content">
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="150"
                    image={placeholderImg}
                    className="event-image" />
                <Box className="event-title-box">
                    <Typography className="event-title">
                        Chef Bryan
                    </Typography>
                    <IconButton className="event-button">
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </IconButton>
                </Box>
                <Typography className="event-description">
                    Watch past MasterChef contestant Bryan cook up a storm at the stage
                </Typography>
                <Typography className="event-times">
                    Sat — 19:00-19:45<br></br>
                    Sun — 19:00-19:45
                </Typography>
            </CardContent>
        </Card>
        <Card className="event-card">
            <CardContent className="event-content">
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="150"
                    image={placeholderImg}
                    className="event-image" />
                <Box className="event-title-box">
                    <Typography className="event-title">
                        Light Experience Room
                    </Typography>
                    <IconButton className="event-button">
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </IconButton>
                </Box>
                <Typography className="event-description">
                    Where art and lights meet! Enjoy a 20 min light art experience. Two shows every hour. Entry is $5 per person.
                </Typography>
                <Typography className="event-times">
                    Sat — 19:00-19:45<br></br>
                    Sun — 19:00-19:45
                </Typography>
            </CardContent>
        </Card>
        <Card className="event-card">
            <CardContent className="event-content">
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="150"
                    image={placeholderImg}
                    className="event-image" />
                <Box className="event-title-box">
                    <Typography className="event-title">
                        Chef Bryan
                    </Typography>
                    <IconButton className="event-button">
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </IconButton>
                </Box>
                <Typography className="event-description">
                    Watch past MasterChef contestant Bryan cook up a storm at the stage
                </Typography>
                <Typography className="event-times">
                    Sat — 19:00-19:45<br></br>
                    Sun — 19:00-19:45
                </Typography>
            </CardContent>
        </Card>
        <Card className="event-card">
            <CardContent className="event-content">
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="150"
                    image={placeholderImg}
                    className="event-image" />
                <Box className="event-title-box">
                    <Typography className="event-title">
                        Light Experience Room
                    </Typography>
                    <IconButton className="event-button">
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </IconButton>
                </Box>
                <Typography className="event-description">
                    Where art and lights meet! Enjoy a 20 min light art experience. Two shows every hour. Entry is $5 per person.
                </Typography>
                <Typography className="event-times">
                    Sat — 19:00-19:45<br></br>
                    Sun — 19:00-19:45
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default eventCard