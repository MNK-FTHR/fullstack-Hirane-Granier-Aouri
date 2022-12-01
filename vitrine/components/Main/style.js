const style = {
    container: {  
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.5fr 1fr",
        gap: "0px 0px",
        gridAutoFlow: "row",
        gridTemplateAreas:`
            "bgcar"
            "main"`
    },
    bgcar: {
        backgroundImage: "url(/imagebg2.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "2fr 1fr",
        gap: "0px 0px",
        gridAutoFlow: "row",
        gridTemplateAreas:`
            ". . ."
            ". desc ."`,
        gridArea: "bgcar"
    },
      
    desc: { gridArea: "desc", backgroundColor: "white", color: "black" },

    description: { 
        fontSize: "18px",
        padding: "25px"
    },
    
    main: {  
        paddingLeft: "50px",
        backgroundColor: "white",
        color: "black",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0px 0px",
        gridAutoFlow: "row",
        gridTemplateAreas:`
            ". mainForm ."`,
        gridArea: "main"
    },

    mainForm: { gridArea: "mainForm" }
}

export default style;