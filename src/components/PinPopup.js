// dependencies
import { Popup } from 'react-map-gl';

// styles
import '../styles/PinPopup.css';

function PinPopup(props) {

    return (
        <Popup
            tipSize={5}
            tipColor="red"
            anchor="top"
            longitude={props.location.marker.coordinates[0]}
            latitude={props.location.marker.coordinates[1]}
            closeButton={false}
        >
            <div className='PinPopup'>{props.location.name}</div>
        </Popup>
    );
}

export default PinPopup;
