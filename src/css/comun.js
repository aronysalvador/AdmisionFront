import { makeStyles } from "@material-ui/core/styles";

export const getComunStyle = makeStyles((theme) => ({

    '@media (max-width: 767px)': {
        /* For mobile phones */
        // CONTAINERS
        rootContainer: {
            position: "relative",
            width: "25.715em",
            height: "45.715em",
            backgroundColor: "#F8F9FA",
        },
        root: {
            position: "relative",
            // width: "25.715em",
            height: "44em", //"45.715em",
            backgroundColor: "#F8F9FA",
        },
        rootBegin: {
            position: "relative",
            width: "25.715em",
            height: "45.715em",
            background: "linear-gradient(120deg, #F8F9FA 50%, #E5F5F4 50%)",
            padding: 0,
        },
        rootWhite: {
            position: "relative",
            width: "25.715em",
            height: "45.715em",
            padding: 0,
        },
        rootImg: {
            position: "relative",
            width: "25.715em",
            height: "45.715em",
            backgroundImage: `url(${require("./../img/Bienvenido.png")})`,
            padding: 0,
        },

        // TEXTOS
        textAchsContent: {
            fontFamily: "Catamaran",
            fontSize: "16px",
            fontStyle: "normal",
            color: "#373737",
        },
        tituloACHS: {
            fontFamily: "sfUiDisplayCufonfonts",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "0.75em",
            lineHeight: "0.875em",
        },
        titleBlack: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: '#373737',
        },
        titleBlue: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: ' #00b2a9',
            display: "contents",
        },
        textErrorRed: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5625em",
            lineHeight: "1.6875em",
            alignItems: "center",
            color: "red",
        },
        textErrorP: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.785em",
            lineHeight: "1.929em",
            alignItems: "center",
            textAlign: "center",
            color: "#081C15",
        },
        textErrorS: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "1.145em",
            lineHeight: "1.785em",
            alignItems: "center",
            textAlign: "center",
            color: "#081C15",
        },
        txtGreen: {
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            color: '#007A33',
        },
        tituloSelectorFecha: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "600", //"bold",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "center",
            letterSpacing: "0.03em", //"2px",
            color: "#787878", //"#373737",
        },
        textCenter: {
            textAlign: "center !important",
        },

        //BOTONES
        bottomElement: {
            padding: "1.145em 0", //"1.145em 1.145em 2.4em 1.145em",
            position: "absolute",
            right: "0",
            left: "0",
            bottom: "0",
        },
        buttonAchs: {
            width: "100%",
            background: "#007A33",
            borderRadius: "0.71em",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.125em",
            lineHeight: "1.125em",
            color: "#FFFFFF",
            textTransform: "inherit",
            height: "3.5em",
            "&:hover": {
                background: "#104F28",
            },
            marginTop: "5px",
        },
        buttonAchs2: {
            width: "100%",
            background: "#FFFFFF",
            border: "2px solid #007A33",
            boxSizing: "border-box",
            borderRadius: "0.71em",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.125em",
            lineHeight: "1.125em",
            color: "#007A33",
            textTransform: "inherit",
            height: "3.5em",
            marginTop: "5px",
        },
        cardsButtonAlign: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        cardsButton: {
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "90px",
            background: "#FFF",
            border: "2px solid #787878",
            borderSpacing: "2px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px",
            paddingBottom: "10px",
        },
        botonSeleccionado: {
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check2.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        cardsButtonOther: {
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "90px",
            background: "#FFF",
            border: "2px solid #787878",
            borderSpacing: "2px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px",
            paddingBottom: "10px",
            fontWeight: "bold",
            "&:hover": {
                background: "#DFF3F2",
                border: "2px solid #00B2A9",
                justifyContent: "center",
                flexDirection: "row",
            }
        },
        buttonAchsRight: {
            width: "46%",
            //  height: "90px",
            background: "#FFFFFF", //#007A33
            border: "2px solid #787878",
            boxSizing: "border-box",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)", //0.125em 0.125em 0.375em
            borderRadius: "10px",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.145em",
            lineHeight: "1.285em",
            color: "#373737",
            textTransform: "inherit", //"capitalize",
            height: "4.8em",
            float: "right",
            marginBottom: "16px",
            "&:hover": {
                background: "#DFF3F2",
                border: "2px solid #00B2A9",
            },
        },
        buttonAchsLeft: {
            width: "46%",
            //height: "90px",
            background: "#FFFFFF", //#007A33
            border: "2px solid #787878",
            boxSizing: "border-box",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)", //0.125em 0.125em 0.375em
            borderRadius: "10px",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.145em",
            lineHeight: "1.285em",
            color: "#373737",
            textTransform: "inherit", //"capitalize",
            height: "4.8em",
            float: "left",
            marginBottom: "16px",
            "&:hover": {
                background: "#DFF3F2",
                border: "2px solid #00B2A9",
            },
        },

        mediumDivider: {
            width: "47%",
        },
        flexDivider: {
            display: "flex",
            alignItems: "center",
        },
        emMargin: {
            margin: "0.5em",
        },

        buttonVolverContainer: {
            width: "20%",
            float: "left",
        },
        buttonVolverContainerBarra: {
            width: "20%",
            float: "left",
        },

        googleMap: {
            width: "100%",
            borderRadius: "20px",
            padding: "10px",
        },
        textAchsContentGreen: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            color: "#007A33",
        },

        barraContainer: {
            paddingTop: "0.5em",
            width: "17.75em",
            float: "left",
        },
        buttonVolverColor: {
            color: "#373737",
        },
        cleanFloat: {
            float: "none",
            clear: "both",
        },
        pullRight: {
            float: "right",
        },
        selectorRuedaItemPrincipal: {
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '22px',
            textAlign: "center",
            color: '#007A33',
        },
        selectorRuedaItemsCostados: {
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            textAlign: "center",
            color: '#787878',
            padding: "5px 0",
        },
        selectorRuedaItemsCostados2: {
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            textAlign: "center",
            color: '#DEDEDE !important',
            // padding: "5px 0",
        },
        selectorRuedaBordesItemPrincipal: {
            margin: "0",
            opacity: "0.2",
        },
        boxHoras: {
            background: "white",
            borderRadius: "10px",
            padding: "8px 25px",
        },
        boxTitleHoras: {
            borderRadius: "10px",
            padding: "8px 25px",
        },

        borderBox: {
            border: "yellow",
            "&:hover": {
                border: "#007A33",
            },
        },
        cajaRutSiniestroContainer: {
            width: "48%",
            border: "1px solid #787878",
            borderRadius: "10px",
            padding: "10px",
            height: "60px",
            paddingBottom: "5px",
            backgroundColor: "#FFFFFF",
        },
        cajaRutSiniestroItem: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
        },
        cajaRutSiniestroTextoPrimario: {
            color: "#373737",
            fontWeight: "bold",
            fontSize: "15px",
        },
        cajaRutSiniestroTextoSecundario: {
            color: "#787878",
            fontWeight: "bold",
            fontSize: "15px",
        },
        iconLocation: {
            marginRight: '10px',
            maxHeight: "15px",
            verticalAlign: "middle",
        },
        siniesterList: {
            display: 'flow-root',
            overflow: 'auto',
            height: '24.5em',
            '&::-webkit-scrollbar': {
                width: 8,
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.2)',
                outline: '0px solid slategrey',
                borderRadius: 4,
            },
        },
        boxRootRelato: {
            padding: "5px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #FAFAFA",
            borderRadius: "10px",
            minHeight: "350px",
            overFlowY: "auto",
        },
        boxRelato: {
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
        },
        boxRelatoText: {
            fontFamily: "Catamaran",
            fontSize: "1em",
            lineHeight: "1.563em",
            padding: "10px",
            overflowWrap: "break-word",
            overflow: "auto",
            height: "24em",
            '&::-webkit-scrollbar': {
                width: 8,
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.2)',
                outline: '0px solid slategrey',
                borderRadius: 4,
            },
        },
        buttonEditRelato: {
            cursor: "pointer",
            textDecoration: "underline",
            color: "#DEDEDE",
        },
        imgAchs: {
            width: '60px', //"4.28125em",
            float: 'right'
        },
        imgProfile: {
            width: '64px',
            height: '64px',
            display: 'none'
        },
        header: {
            display: 'none',
            width: '100%'
        },
        displayDesk: {
            display: 'none'
        },

        displayMobile: {
            display: 'block'
        },
    },

    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        root: {
            width: '100%',
            // background: "linear-gradient(180deg, #F4F4F4 50%, #EAEAEA 50%)",
        },
        imgAchs: {
            width: '64px',
            // height: '64px',
            marginBottom: '40px',
        },
        header: {
            // width: '1441px',
            height: '63px',
            border: '0',
            background: '#007A33',
            display: 'flex'
        },
        headerSesion: {
            // width: '1441px',
            height: '700px', //'813px',
            border: '0',
            background: 'linear-gradient(180deg, #007A33 50%, #F4F4F4 50%)',
            // top: '63px',
            position: 'relative',
            textAlign: 'center',
            fontFamily: 'Catamaran'
        },
        boxDesk: {
            width: '60%', //'416px',
            maxWidth: '860px',
            minWidth: '700px',
            // height: '354px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            // marginTop: '50px',
            padding: '33px',
            textAlign: 'center',
        },
        boxSesion: {
            width: '416px',
            height: '354px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '50px',
        },
        boxGeneral: {
            width: '60%', //'416px',
            maxWidth: '860px',
            height: '354px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '50px',
        },
        imgProfile: {
            width: '64px',
            height: '64px',
            display: 'flex'
        },
        bottomElement: {
            padding: "40px 10% !important",
            // position: "absolute",
            right: "0",
            left: "0",
            bottom: "0",
        },
        bottomMargin: {
            margin: '11.5%',
            width: '77% !important',
        },
        paddingElement: {
            padding: "0px 20%",
            // position: "absolute",
            right: "0",
            left: "0",
            bottom: "0",
        },
        buttonAchs: {
            width: "50%", //"100%",
            background: "#007A33",
            borderRadius: "0.71em",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.125em",
            lineHeight: "1.125em",
            color: "#FFFFFF",
            textTransform: "inherit",
            height: "3.5em",
            "&:hover": {
                background: "#104F28",
            },
            marginTop: "5px",
            minWidth: "260px"
        },
        buttonAchs2: {
            width: "50%", //"100%",
            background: "#FFFFFF",
            border: "2px solid #007A33",
            boxSizing: "border-box",
            borderRadius: "0.71em",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.125em",
            lineHeight: "1.125em",
            color: "#007A33",
            textTransform: "inherit",
            height: "3.5em",
            marginTop: "5px",
            minWidth: "260px"
        },
        tituloCerrarSesion: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold", //"700",
            fontSize: "16px",
            lineHeight: "18px",
            margin: 'auto 15px',
            // marginLeft: "40%",
            // marginTop: '22px',
            color: "#FFFFFF",
        },
        titleBlack: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '34px',
            color: '#373737',
        },
        subtitleBlack: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: '#373737',
        },
        titleBlack2: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '40px',
            lineHeight: '44px',
            color: '#373737',
        },
        titleBlue: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: ' #00b2a9',
            display: "contents",
        },
        textAchsContentWhite: {
            fontFamily: "Catamaran",
            fontSize: "16px",
            fontStyle: "normal",
            color: "#FFFFFF",
        },
        textCenterDesk: {
            textAlign: "center !important",
        },
        titleCenterDesk: {
            textAlign: "center !important",
            position: "relative",
            marginTop: "0px"
        },
        displayDesk: {
            display: 'block'
        },
        displayDeskFlex: {
            display: 'flex'
        },
        displayDeskInline: {
            display: 'inline-flex'
        },
        displayMobile: {
            display: 'none'
        },
        containerHeader: {
            alignSelf: 'center',
            minInlineSize: 'fit-content',
            position: 'absolute',
            right: '10%'
        },
        textPrimaryDesk: {
            display: "inline-block",
            width: "65%",
            textAlign: "left",
            maxWidth: "460px",
            verticalAlign: "top"
        },
        alignBtnSiniesterLeft: {
            position: 'relative',
            right: '3%',
            width: '301px',
            marginBottom: '32px'
        },
        alignBtnSiniesterRight: {
            position: 'relative',
            right: '-3%',
            width: '301px',
            marginBottom: '32px'
        }
    },

    tituloTextbox: {
        letterSpacing: ".03em",
        fontSize: "1em",
        fontWeight: "normal",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#787878",
    },
}));