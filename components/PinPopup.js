// dependencies
import { Popup } from 'react-map-gl';

// styles
//import '../styles/PinPopup.css';

const PinPopup = (props) => {
    const { marker } = props;

    return (
        <Popup
            tipSize={5}
            tipColor="red"
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
