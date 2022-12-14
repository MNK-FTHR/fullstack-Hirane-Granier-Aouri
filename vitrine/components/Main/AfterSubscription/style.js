const style = {
    container: {
        backgroundColor: "#F9F9F9",
        paddingTop: "0.5rem",
        paddingLeft: "1.5rem",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "42px 0px",
        width: "90%",
        gridTemplateAreas: `
            "text"
            "links"`
    },
    text: { gridArea: "text" },
    links: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0px 56px",
        gridTemplateAreas: `"first second"`,
        gridArea: "links",
        paddingBottom: "40px"
    },
    first: { gridArea: "first", textAlign: "right" },
    second: { gridArea: "second", textAlign: "left" }

}

export default style;