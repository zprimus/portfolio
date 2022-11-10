// dependencies
import { Popup } from 'react-map-gl';
import Image from 'next/image';

const PinPopup = ({location, location: { marker }}) => {
    return (
        <Popup
            className='Popup'
            tipSize={5}
            anchor="top"
            longitude={marker.coordinates[0]}
            latitude={marker.coordinates[1]}
            closeButton={false}
            closeOnClick={false}
            style={{
                cursor: 'pointer',
            }} 
        >
            <div className='PinPopup'>
                <h3>{marker.name}</h3>
                <Image 
                    src={location.info.imgs[0].pic}
                    alt={location.info.imgs[0].alt}
                    height='100%'
                    width='100%'
                />
                <p>Click here for more!</p>
            </div>
        </Popup>
    );
}

export default PinPopup;
