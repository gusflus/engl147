function imgCite(props) {
    return(
        <div>
            <img src={props.image} alt="image" />
            <span style={{fontSize: "2vw"}}>{props.text}</span>
        </div>
    );
}

export default imgCite