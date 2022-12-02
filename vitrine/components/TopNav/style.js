const style = {
    container: {
        backgroundColor: "white",
        color: "black",
        display: "grid",
        gridTemplateColumns: "66px 1fr 1fr",
        gridTemplateRows: "66px",
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
        fontWeight: "400",
        float: "left",
        fontSize: "40px",
        margin: "5px 15px",
    },
    connexion: {
        margin: "10px 15px",
        float: "right"
    }
}

export default style;