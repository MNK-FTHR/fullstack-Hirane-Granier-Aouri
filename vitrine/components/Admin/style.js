const style = {
    background: {
        backgroundColor: "#F5F5F5",
        paddingBottom: "25%",
    },
    container: {
        marginLeft: "25%",
        marginRight: "25%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
            "title"
            "nav"
            "table"
        `
    },
    nav: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
            "nav1 nav2"
        `,
        gridArea: "nav",
        backgroundColor: "white",
        height: "25%",
        justifyContent: "center",
        alignContent: "center",
    },
    title: { 
        paddingTop: "25px",
        gridArea: "title",
    },
    nav1: { 
        gridArea: "nav1",

    },
    nav2: { 
        gridArea: "nav2",

    },
    table: { 
        marginTop: "-10%",
        gridArea: "table",
        backgroundColor: "white"
    },
    tab: {
        color: "grey"
    },
    activeTab: {
        textDecoration: "underline red 2px"
    },
}
export default style;