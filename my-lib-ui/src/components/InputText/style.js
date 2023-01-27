const style = {
    wrapper: {
        position: "relative",
        width: "100%",
    },
    inputContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 0.1fr",
        gridTemplateRows: "1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
            "inp eye"
        `

    },
    textInput: {
        gridArea: "inp",
        border: "none",
        color: "red",
        borderBottom: `0.125rem solid black`,
        backgroundColor: "#F9F9F9",
        width: "100%",
        height: "2rem",
        fontSize: "1rem",
        lineHeight: "147.6%",
        padding: "18px 12px 18px 16px",
        textDecoration: "none",
        outline: "none",
    },

    subText: {
        position: "absolute",
        top: "-1rem",
        left: "0.875rem",
        lineHeight: "147.6%",
        color: "rgba(19, 19, 21, 0.6)",
        transition: "top .2s",
    },

    hidePW1:{
        padding: "5px",
        position: "relative",
        zIndex:1,
        cursor: "pointer",
        gridArea: "eye",
        backgroundColor: "#F9F9F9",
        width: "100%",
        height: "100%",
        borderBottom: `0.125rem solid black`,
    },
    hidePW2:{
        padding: "5px",
        position: "absolute",
        zIndex: 2,
        marginTop: "-37px",
        cursor: "pointer",
        gridArea: "eye",
    },
    revealPW:{
        padding: "5px",
        cursor: "pointer", 
        gridArea: "eye",
        width: "100%",
        height: "100%",
        backgroundColor: "#F9F9F9",
        borderBottom: `0.125rem solid black`,
    }
}

export default style;