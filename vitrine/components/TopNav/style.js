const style = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0px 0px",
        gridTemplateAreas: 
            `"logoImage title connexion"`
    },
    gridObjects: {
        logoImage: { gridArea: "logoImage" },
        title: { gridArea: "title" },
        connexion: { gridArea: "connexion" }
    },
    title: {
        textDecoration: "bold"
    }
}

export default style;