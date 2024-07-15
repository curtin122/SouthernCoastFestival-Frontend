import { LitElement, html, css } from 'lit'
import * as React from 'react'
import Card from '@mui/material'
import CardContent from '@mui/material'
import Typography from '@mui/material'

class EventCard extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            eventdisplayname: {
                type: String
            },
            eventdescription: {
                type: String
            },
            eventimage: {
                type: String
            },
            eventoperationdatetimestart: {
                type: String
            },
            vendorcontactname: {
                type: String
            }
        }
    }

    firstUpdated() {
        super.firstUpdated()
    }

    render() {
        return html`
            <style>
            </style>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography>
                        Card Test
                    </Typography>
                </CardContent>
            </Card>
        `
    }
}