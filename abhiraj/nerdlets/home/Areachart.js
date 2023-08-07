import React from "react";
import { AreaChart } from 'nr1'

export default class ExampleAreachart extends React.Component{
    render(){
        const areachart1 = [
            {
                metadata: {
                  id: 'series-1',
                  name: 'Serie 1',
                  color: '#a35ebf',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 128 }],
              }
        ]
        // return <PieChart data={[piechart1]} fullWidth />;
        return <AreaChart
        accountId={4072737}
        query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDA3MjczN3xJTkZSQXxOQXw3MDYwNDIwNzY4MTQxMzc4OTgx' TIMESERIES auto" 
        fullWidth
      />;
    }
}