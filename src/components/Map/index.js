import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Map() {
    const libraries = ["places"];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFn64sgCcfalskP4E55PP2CoEE8qo1a8Y',
        libraries,
    });

    const center = {
        lat: 35.59009, // default latitude
        lng: -82.58199, // default longitude
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    const mapContainerStyle = {
        width: '40vw',
        height: '40vh',
        borderRadius: '15px'
    };

    return(
        <>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={19}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </>
    );
}

export default Map;
