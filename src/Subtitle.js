function Title(props) {
    const boxStyle = {
        position: "absolute",
        backgroundColor: "black",
    }

    const imageStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: "0.35",
    };

    const textStyle = {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        fontSize: "3.75vw",
        paddingTop: "5.4vw",
        fontWeight: "bold",
    };

    return(
    <div className={props.class} style={{position: "relative"}}>
        <div style={boxStyle}></div>
        <img style={imageStyle} src={props.image} alt="image" />
        <span style={textStyle}>{props.text}</span>
    </div>
  );
}

export default Title