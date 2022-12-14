const colors = {
    medium: "rgba(19, 19, 21, 0.6)"
}
const style = {
    wrapper: {
        position: "relative",
        width: "100%",
    },
    textInput: {
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
    }
}

export default style;