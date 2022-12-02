const style = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
        "radioArea ."
        "lastName firstName"
        "eMail phone"
        "nationality ."
        "driversLicense ."
        ". subscribe"` 
    },
    radioArea: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0px 0px",
        gridTemplateAreas: `
        "company private"`,
        gridArea: "radioArea"
    },
    company: { gridArea: "company" },
    private: { gridArea: "private" },
    lastName: { gridArea: "lastName" },
    firstName: { gridArea: "firstName" },
    eMail: { gridArea: "eMail" },
    phone: { gridArea: "phone" },
    nationality: { gridArea: "nationality" },
    driversLicense: { gridArea: "driversLicense" },
    subscribe: { gridArea: "subscribe" },
}

export default style;