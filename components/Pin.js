// dependencies
import { useState } from "react";
import { Marker } from 'react-map-gl';
import Link from 'next/link';

// components
import PinPopup from "./PinPopup.js";

// styles
import styles from '../styles/styles.js';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const Pin = ({location, location: { marker }, handleViewportChange}) => {
  const [showPopup, setPopupState] = useState(false);

  const handlePinClick = () => {
    handleViewportChange({
      latitude: 17,
      longitude: 11,
      zoom: 2,
    });
    //setPopupState(!showPopup);
  }

  return (
    <>
      <Marker 
        key={marker.id}
        longitude={marker.coordinates[0]}
        latitude={marker.coordinates[1]}
        onClick={() => handlePinClick()}
      >
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: 'pointer',
            fill: styles.color.color4,
            stroke: styles.color.color1,
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
          }}
        >
          <path d={ICON}/>
        </svg>
      </Marker>
      {
        showPopup &&
        <Link href={`/explore/${location.id}`} style={{textDecoration: 'none'}}>
          <div style={{cursor: 'pointer'}}>
            <PinPopup
              marker={marker}
            />
            <p>hi</p>
          </div>
        </Link>
      }
    </>
  );
}

export default Pin;
