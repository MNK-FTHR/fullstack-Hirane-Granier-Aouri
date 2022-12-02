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
        borderBottom: `0.125rem solid ${colors.medium}`,
        width: "100%",
        height: "2rem",
        fontSize: "1.0625rem",
        paddingLeft: "0.875rem",
        lineHeight: "147.6%",
        paddingTop: "0.825rem",
        paddingBottom: "0.5rem",
    },

    subText: {
        position: "absolute",
        top: "0.9375rem",
        left: "0.875rem",
        lineHeight: "147.6%",
        color: `${colors.medium}`,
        transition: "top .2s",
    }
}

export default style;