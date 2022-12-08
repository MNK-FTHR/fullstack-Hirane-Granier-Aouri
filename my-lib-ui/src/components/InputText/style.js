const colors = {
    medium: "rgba(19, 19, 21, 0.6)"
}
const style = {
    wrapper: {
        marginBottom: "1.5rem",
        position: "relative",
        width: "20.4375rem",
    },
    textInput: {
        border: "none",
        borderBottom: `0.125rem solid black`,
        width: "100%",
        height: "2rem",
        fontSize: "1.0625rem",
        paddingLeft: "0.875rem",
        lineHeight: "147.6%",
        paddingTop: "0.825rem",
        paddingBottom: "0.5rem",
        "&:hover": {
            background: "rgba(73, 133, 224, 0.12)",
            borderColor: "#121212",
        },
        
    },

    subText: {
        position: "absolute",
        top: "0.500rem",
        left: "0.875rem",
        lineHeight: "147.6%",
        color: `${colors.medium}`,
        transition: "top .2s",
    }
}

export default style;