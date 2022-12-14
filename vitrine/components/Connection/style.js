const style = {
    spaceAround: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "0px 0px", 
        justifyContent: "center",
        alignItems: "center",
        gridTemplateAreas: `
            ". . ."
            ". container ."
            ". . ."`
    },
    container: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "16px 0px",
        gridTemplateAreas:`
            "goBack"
            "form"`
    },
    goBack: {gridArea: "goBack"},
    form: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.8fr 1fr 1fr 1.2fr",
        gap: "24px 0px",
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