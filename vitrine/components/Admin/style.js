const style = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
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
    },
    nav1: { gridArea: "nav1"},
    nav2: { gridArea: "nav2"},
    table: { gridArea: "table" }
}
export default style;