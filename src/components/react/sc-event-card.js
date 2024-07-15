import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, CardHeader, Badge } from '@mui/material'
import placeholderImg from '../../../static/images/chef-bryan-entertainment.jpg'
import './../../scss/react.scss'
import App from './../../App'
import Event from './../../Event'
import { useState, useEffect } from 'react';

console.log("in sc event card")
const scEventCard = () => {
  const [festivalevents, setFestivalevents] = useState([]); //useState hook to create a state variable named festivalevents with initial value of empty array
  useEffect(() => {
    fetch(`${App.apiBase}/public/events`) // Adjust the URL based on your setup
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log(data);
          setFestivalevents(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);
  console.log(festivalevents) 
  return (
    <>
      
      {festivalevents.map((event) => (
        <Card key={event._id} className="event-card">
          <CardHeader
            title={event.eventdisplayname}
            subheader={event.eventoperationdatetimestart}
          />
          <CardMedia
            component="img"
            height="194"
            image={event.eventimage}
            alt={event.eventdisplayname}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {event.eventdescription}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton>
              <Badge badgeContent={event.likes} color="primary">
              </Badge>
            </IconButton>
          </Box>
        </Card>
      ))}
    </>
  );
}
export default scEventCard;