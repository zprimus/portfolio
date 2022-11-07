// dependencies
import { Popup } from 'react-map-gl';

const PinPopup = ({marker}) => {
    return (
        <Popup
            tipSize={5}
            anchor="top"
            longitude={marker.coordinates[0]}
            latitude={marker.coordinates[1]}
            closeButton={false}
        >
            <div className='PinPopup'>{marker.name}</div>
        </Popup>
    );
}

export default PinPopup;
