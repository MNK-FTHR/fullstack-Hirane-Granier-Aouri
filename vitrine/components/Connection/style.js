const style = {
    spaceAround: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "0.1fr 1fr 0.1fr",
        gap: "0px 0px", 
        justifyContent: "center",
        backgroundColor: "lightgrey", 
        alignItems: "center",
        gridTemplateAreas: `
            ". whiteSpace ."
            ". container ."
            ". . ."`
    },
    whiteSpace:{
        gridArea: "whiteSpace"
    },
    container: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.25fr 1fr",
        gap: "0px 0px",
        gridArea: "container",
        gridTemplateAreas:`
        "goBack"
        "form"`
    },
    goBack: {
        paddingTop: "10%",
        gridArea: "goBack",
        fontWeight: "bold",
    },
    goBackHover: {
        textDecoration: "underline",
    },
    form: {
        padding:"12px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.8fr 1fr 1fr 1.2fr",
        backgroundColor: "white", 
        gap: "0px 0px",
        gridTemplateAreas: `
            "connexion"
            "id"
            "pw"
            "btn"`,
        gridArea: "form"
    },
    connexion: {
        gridArea: "connexion",
        color: "#C00000",
        fontWeight: "500"
    },
    id: {gridArea: "id"},
    pw: {gridArea: "pw"},
    btn: {gridArea: "btn"}
};

export default style;