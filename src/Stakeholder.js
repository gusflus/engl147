function Stakeholder(props) {
    const textStyle = {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "100%",
        fontSize: "2vw",
        paddingTop: "1.25vw",
        fontWeight: "bold",
    };

    return(
    <div className={props.class} style={{position: "relative", width: "96%)"}}>
        <div style={{position: "absolute", backgroundColor: props.color, height: "33%", width: "97%"}}></div>
        <span style={textStyle}>{props.stake}</span>
        <p style={{fontSize: "1.25vw", paddingTop: "4.5vw", width: "97%"}}>{props.text}</p>
    </div>
  );
}

export default Stakeholder