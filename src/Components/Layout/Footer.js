import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default props =>
    <Paper square>
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            //onChange={handleChange}
            aria-label="disabled tabs example"
            centered
  >
            <Tab label="Daily Forecast" />
            <Tab label="5-Day Forecast" disabled/>
            <Tab label="More to come" disabled />
        </Tabs>
    </Paper>