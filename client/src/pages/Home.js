import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {Marker} from 'react-map-gl'
import { points } from "../utils/api";
import { useEffect } from 'react';

export default function Home() {
  const [point, setPoint] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vw",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  useEffect(() => {
    (async () => {
      const point = await points();
      // setPoint(point)
      console.log(point);
    })()
  }, [])

  const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2x1Z292b3k4MSIsImEiOiJja2s3Yjk3d20wYzhoMnhtaXo0N3MxZnRoIn0.iRRYqUDtPqDSubEVG9RSgw';

  //  Rendering (point, setpoint and usestate)
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slugovoy81/ckk7ccpwo098t18qyk7ydw402"
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {
        point.map(entry => (
          <Marker
              latitude={entry.latitude}
              longitude={entry.longitude}
            >
              <div style= {{color:"red"}}>
                {entry.title}
              </div>
            </Marker>
        ))
      }
    </ReactMapGL> 
    



    
  );

}
