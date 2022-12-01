const style = {
    container: {
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "0px 0px",
        gridAutoFlow: "row",
        gridTemplateAreas:`
            "firstLink . ."
            "secondLink . ."
            ". main ."`
    },
    gridObjects:{
        firstLink: { gridArea: "firstLink", marginTop: "15px" },
        secondLink: { gridArea: "secondLink", marginTop: "15px" },
        main: { gridArea: "main", textAlign: "center" },
    },
    mainText: {
        color: "white",
        fontSize: "16px"
    },
    link: {
        color: "white",
        margin: "10px 50px",
        textDecoration: "underline"

    },

}

export default style;