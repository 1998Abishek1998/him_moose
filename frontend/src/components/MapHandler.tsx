
const MapHandler = () => {
    const openGoogleMaps = () => {
        window.open(
            "https://www.google.com/maps/place/3350+34+St+NE,+Calgary,+AB+T1Y+6Z8,+Canada/@51.0825188,-113.9857927,19z/data=!3m1!4b1!4m6!3m5!1s0x537164c1c562ae71:0x5ef75a4249a76266!8m2!3d51.082518!4d-113.985149!16s%2Fg%2F11pvcv636_?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
            "_blank",
            "noopener,noreferrer"
        );
    };
    return (

        <div className="map" onClick={openGoogleMaps}>
            <img height={300} width={400} src={"/himalayan_moose_loc.png"} alt="Map location of The Himalayan Moose Restaurant" />
        </div>)
}

export default MapHandler