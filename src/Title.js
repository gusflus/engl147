function Title(props) {
    const boxStyle = {
        position: "absolute",
        backgroundColor: "black",
    }

    const imageStyle = {
        position: "absolute",
    };

    const textStyle = {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        fontSize: "6vw",
        paddingTop: "4vw",
        fontWeight: "bold",
    };

    return(
    <div className={props.class} style={{position: "relative"}}>
        <div style={boxStyle}></div>
        <img style={imageStyle} className="Title" src={props.image} alt="image" />
        <span style={textStyle}>{props.text}</span>
    </div>
  );
}

export default Title