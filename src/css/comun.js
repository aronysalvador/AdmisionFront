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
        bottomElementMap: {
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
        // cardBtn: {
        //     display: "flex",
        //     justifyContent: "space-between",
        //     // flexDirection: "row",
        //     flexFlow: "column"
        // },
        cardsButtonTipoAccidenteTrayecto: {
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%%",
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
            // marginTop: "10px",
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
        botonSeleccionadoSingle: {
            // marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check5.svg")})`,
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
        cardsButtonOtherCheck: {
            position: "relative",
            bottom: "25px",
            left: "105px"
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
        bpList: {
            paddingRight: '10px',
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
            height: "23em",
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
            // textDecoration: "underline",
            color: "#373737",
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
        imgLoadData: {
            width: "15.625em",
        },
        imgLoadData2: {
            width: "7.28125em",
        },
        imgPass: {
            width: '146px'
        },
        header: {
            display: 'none',
            width: '100%'
        },
        displayDesk: {
            display: 'none'
        },
        displayDeskInline: {
            display: 'none'
        },
        displayDeskImg: {
            display: 'none'
        },
        displayMobile: {
            display: 'block'
        },
        txtLoadData: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5625em",
            lineHeight: "1.6875em",
            alignItems: "center",
            color: "#081C15",
        },
        txtLoadData2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "1em",
            lineHeight: "1.5625em",
            alignItems: "center",
            color: "#081C15",
        },
        txtLoadDataGreen: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.5625em",
            lineHeight: "1.6875em",
            alignItems: "center",
            color: "#007A33",
        },
        googleMap: {
            width: "100%",
            borderRadius: "20px",
            padding: "10px",
            textAlign: "center"
        },
    },

    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        root: {
            width: '100%',
        },
        imgAchs: {
            width: '64px',
            marginBottom: '40px',
        },
        header: {
            height: '63px',
            border: '0',
            background: '#007A33',
            display: 'flex'
        },
        headerSesion: {
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
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            padding: '30px 20px 20px', //'33px',
            textAlign: 'center',
        },
        boxDesk2: {
            width: '60%', //'416px',
            minWidth: '700px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            textAlign: 'center',
        },
        boxDeskCardBtn: {
            width: '60%',
            maxWidth: '860px',
            minWidth: '700px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            padding: '30px 100px',
            textAlign: 'center',
        },
        boxCardBtn: {
            width: '100%',
            // maxWidth: '860px',
            minWidth: '700px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            padding: '30px',
            textAlign: 'center',
        },
        boxDeskMap: {
            width: '60%',
            maxWidth: '860px',
            minWidth: '700px',
            border: '0',
            background: 'white !important',
            boxShadow: '0px 4px 4px rgba(55, 55, 55, 0.09)',
            borderRadius: '8px',
            alignItems: 'center',
            margin: 'auto',
            textAlign: 'center',
            position: 'relative',
            height: '573px',
        },
        googleMap: {
            width: "250px", //"100%",
            borderRadius: "20px",
            padding: "10px",
            textAlign: "center"
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
            padding: "30px 0",
            textAlign: "center",
        },
        bottomElement2: {
            padding: "15px",
            textAlign: "center",
        },
        bottomElementMap: {
            padding: '40px 0',
            textAlign: 'center',
            position: 'absolute',
            bottom: '2em',
            right: '0',
            left: '0',
        },
        // bottomMargin: {
        //     margin: '11.5%',
        //     width: '77% !important',
        // },
        paddingElement: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        buttonAchs: {
            width: "50%",
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
            minWidth: "300px",
            maxWidth: '60%', //"328px",
        },
        buttonAchs2: {
            width: "50%",
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
            minWidth: "300px",
            maxWidth: '60%', //"328px",
        },
        buttonAchsSiniester: {
            width: "40%",
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
            minWidth: "300px",
            maxWidth: '60%', //"328px",
        },
        buttonAchsSiniester2: {
            width: "40%",
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
            minWidth: "300px",
            maxWidth: '60%', //"328px",
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
            fontSize: '26px', //'32px',
            lineHeight: '34px', //'44px',
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
        titleGray: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '26px', //'32px',
            lineHeight: '34px', //'44px',
            color: '#787878',
        },
        titleBlue: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '28px',
            color: '#00b2a9',
            display: "contents",
        },
        titleBlue2: {
            fontFamily: 'Catamaran',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '26px', //'32px',
            lineHeight: '34px',
            color: '#00b2a9',
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
            // position: "relative",
            marginTop: "0px"
        },
        titleDesk: {
            // width: '90%',
            // position: 'relative',
            display: 'flex',
            justifyContent: 'space-around',
            // margin: '-15px auto 30px',
            marginTop: '-30px'
        },
        titleDeskFinal: {
            // width: '90%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-around',
        },
        displayDesk: {
            display: 'block'
        },
        displayDeskFlex: {
            display: 'flex',
        },
        displayDeskInline: {
            display: 'inline-flex'
        },
        displayDeskImg: {
            display: 'contents'
        },
        displayOnlyDeskInline: {
            display: 'inline-flex'
        },
        displayMobile: {
            display: 'none'
        },
        displayDeskFlexFinal: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        containerHeader: {
            alignSelf: 'center',
            minInlineSize: 'fit-content',
            position: 'absolute',
            right: '10%'
        },
        textPrimaryDesk: {
            display: "inline-block",
            width: "86%", //"73%", "65%",
            textAlign: "left",
            // maxWidth: "460px",
            verticalAlign: "top",
            minHeight: '73px' //'88px'
        },
        imgPrimaryDesk: {
            float: 'right'
        },
        imgPrimaryWidth: {
            width: '80px' //'100px'
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
        },
        containerTextBox: {
            width: '50%', //'328px',
            minWidth: '300px',
            textAlign: 'left',
            margin: 'auto',
        },
        beginContainerDesk: {
            width: '90%',
            margin: 'auto',
            position: 'relative'
        },
        barraContainer: {
            position: 'relative',
            width: '90%',
            right: '-70px',
            marginTop: '-20px',
        },
        titlePrimaryDesk: {
            width: '90%',
            margin: 'auto',
            marginTop: '20px',
            marginBottom: '20px', //'30px'
        },
        imgLoadData: {
            width: "14em",
        },
        imgLoadData2: {
            width: "116px",
        },
        imgPass: {
            width: '90px'
        },
        txtLoadData: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "36px",
            lineHeight: "42px",
            alignItems: "center",
            color: "#081C15",
        },
        txtLoadData2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            alignItems: "center",
            color: "#081C15",
        },
        txtLoadDataGreen: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "36px",
            lineHeight: "42px",
            alignItems: "center",
            color: "#007A33",
        },
        siniesterList: {
            display: 'flow-root',
            overflow: 'auto',
            height: '17em',
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
        bpList: {
            // paddingRight: '10px',
            height: '25em !important',
        },
        widthDateSex: {
            width: "48%"
        },
        boxRootRelato: {
            padding: "5px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #FAFAFA",
            borderRadius: "10px",
            // minHeight: "250px",
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
            height: "8em",
            textAlign: "initial",
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
            // textDecoration: "underline",
            color: "#373737", //"#DEDEDE",
        },
        cajaRutSiniestroContainer: {
            width: "12em",
            border: "1px solid #787878",
            borderRadius: "10px",
            padding: "10px",
            height: "5em",
            paddingBottom: "5px",
            backgroundColor: "#FFFFFF",
            marginRight: "0.5em"
        },
        cajaRutSiniestroItem: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
        },
        cajaRutSiniestroTextoPrimario: {
            color: "#104F28",
            fontWeight: "bold",
            fontSize: "22px",
        },
        cajaRutSiniestroTextoSecundario: {
            color: "#787878",
            fontWeight: "bold",
            fontSize: "16px",
        },
        textErrorRed: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "28px",
            lineHeight: "28px",
            alignItems: "center",
            color: "red",
        },
        textErrorP: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "34px",
            alignItems: "center",
            textAlign: "center",
            color: "#373737",
        },
        textErrorS: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            alignItems: "center",
            textAlign: "center",
            color: "#373737",
        },
        cardsButtonAlign: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        cardsButton: {
            // marginTop: "10px",
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
        cardBtn: {
            // flexFlow: "wrap"
        },
        cardsButtonTipoAccidenteTrayecto: {
            // marginTop: "10px",
            // marginBottom: "10px",
            display: "inline-flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "30%", //"45%",
            height: "6em",
            background: "#FFF",
            border: "2px solid #787878",
            borderSpacing: "2px",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px",
            paddingBottom: "10px",
            margin: "0 5px"
        },
        botonSeleccionado: {
            // marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check3.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        botonSeleccionadoSingle: {
            // marginTop: "10px",
            // marginBottom: "10px",
            display: "inline-flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "30%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check2.svg")})`,
            backgroundRepeat: "no-repeat",
            margin: "0 5px"
        },
        cardsButtonOther: {
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "6em", //"90px",
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
        cardsButtonOtherCheck: {
            position: "relative",
            bottom: "25px",
            left: "205px"
        },
        buttonAchsRight: {
            width: "46%",
            height: "4.8em", //"90px",
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
            float: "right",
            marginBottom: "16px",
            "&:hover": {
                background: "#DFF3F2",
                border: "2px solid #00B2A9",
            },
        },
        buttonAchsLeft: {
            width: "46%",
            height: "4.8em", //"90px",
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
            float: "left",
            marginBottom: "16px",
            "&:hover": {
                background: "#DFF3F2",
                border: "2px solid #00B2A9",
            },
        },
        deskFlex: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            margin: '10px 0'
        },
        roundedBlueNoMargin: {
            display: 'flex',
            minWidth: '315px',
            width: '100%',
        },
        roundedNormalNoMargin: {
            display: 'flex',
            minWidth: '315px',
            width: '100%'
        },
        roundedBlue: {
            display: 'flex',
            minWidth: '315px',
            width: '100%',
            margin: '0 5px'
        },
        roundedRadioBlue: {
            display: 'flex',
            width: '100%',
            margin: '0 5px'
        },
        roundedNormal: {
            display: 'flex',
            minWidth: '315px',
            width: '100%',
            margin: '0 5px'
        },
        roundedRadioNormal: {
            display: 'flex',
            width: '100%',
            margin: '0 5px'
        },
        widthOtro: {
            width: '90%'
        }
    },

    '@media (min-width: 860px)': {
        beginContainerDesk: {
            width: '75%',
            margin: 'auto',
            position: 'relative'
        },
        titlePrimaryDesk: {
            width: '75%',
            margin: 'auto',
            marginTop: '20px', //'30px'
            marginBottom: '20px', //'30px'
        },
    },

    '@media (min-width: 1060px)': {
        beginContainerDesk: {
            width: '60%',
            margin: 'auto',
            position: 'relative'
        },
        titlePrimaryDesk: {
            width: '60%',
            margin: 'auto',
            marginTop: '20px', //'30px'
            marginBottom: '20px', //'30px'
        },
    },

    '@media (min-width: 1280px)': {
        botonSeleccionado: {
            // marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check4.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        botonSeleccionadoSingle: {
            // marginTop: "10px",
            // marginBottom: "10px",
            display: "inline-flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "30%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check6.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        cardsButtonOtherCheck: {
            position: "relative",
            bottom: "25px",
            left: "240px"
        },
    },

    '@media (min-width: 1440px)': {
        botonSeleccionado: {
            // marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "45%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check5.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        botonSeleccionadoSingle: {
            // marginTop: "10px",
            // marginBottom: "10px",
            display: "inline-flex",
            justifyContent: "center", //"space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "30%",
            height: "6em", //"90px",
            backgroundColor: "#DFF3F2 !important",
            border: "2px solid #00B2A9 !important",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            paddingTop: "15px", //"35px",
            paddingBottom: "10px",
            color: "#373737",
            backgroundImage: `url(${require("./../img/check7.svg")})`,
            backgroundRepeat: "no-repeat",
        },
        cardsButtonOtherCheck: {
            position: "relative",
            bottom: "25px",
            left: "280px"
        },
    },

    '@media (min-width: 1540px)': {
        beginContainerDesk: {
            width: '50%',
            margin: 'auto',
            position: 'relative'
        },
        titlePrimaryDesk: {
            width: '50%',
            margin: 'auto',
            marginTop: '20px', //'30px'
            marginBottom: '20px', //'30px'
        },
    },

    '@media (min-width: 1800px)': {
        beginContainerDesk: {
            width: '40%',
            margin: 'auto',
            position: 'relative'
        },
        titlePrimaryDesk: {
            width: '40%',
            margin: 'auto',
            marginTop: '20px', //'30px'
            marginBottom: '20px', //'30px'
        },
    },

    tituloTextBox: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "1em",
        lineHeight: "14px",
        letterSpacing: ".03em",
        // textTransform: "uppercase",
        color: "#787878",
    },
    textErrorP2: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.25em",
        lineHeight: "1.75em",
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
        boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    boxTitleHoras: {
        borderRadius: "10px",
        padding: "8px 25px",
    },
    boxCalendar: {
        background: "white",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    txtCalendar: {
        fontFamily: "Helvetica",
        fontSize: "18px",
        fontWeight: "bold",
        // lineHeight: '22px',
        float: "left",
        clear: "left",
    },
    txtTodayCalendar: {
        display: "block",
        textAlign: "center",
        fontFamily: 'Catamaran',
        fontWeight: 'bold',
        fontSize: '1em',
        // lineHeight: '1em',
        letterSpacing: '0.03em'
    },
    buttonEditRelato: {
        cursor: "pointer",
        // textDecoration: "underline",
        color: "#373737",
    },
    pullRight: {
        float: "right",
        fontFamily: "Helvetica",
        fontSize: "1em",
        lineHeight: "1.572em",
        color: "#787878",
    },
    roundedBlue: {
        color: "#373737",
        border: "2px solid #00B2A9 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#DFF3F2 !important"
    },
    roundedRadioBlue: {
        color: "#373737",
        border: "2px solid #00B2A9 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#DFF3F2 !important"
    },
    roundedNormal: {
        color: "#373737",
        border: "2px solid #787878 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        background: "#FFFFFF"
    },
    roundedRadioNormal: {
        color: "#373737",
        border: "2px solid #787878 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        background: "#FFFFFF"
    },
    roundedBlueNoMargin: {
        color: "#373737",
        border: "2px solid #00B2A9 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#DFF3F2 !important"
    },
    roundedNormalNoMargin: {
        color: "#373737",
        border: "2px solid #787878 !important",
        borderRadius: "10px",
        alignItems: "center",
        // justifyContent: "center",
        background: "#FFFFFF"
    },
    txtRadios: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#373737"
    },
    containerOpction: {
        display: "flex",
        marginLeft: "40px"
    },
    containerOpctionCompl: {
        display: "flex",
        marginLeft: "10px"
    },
    textPrimaryRelato: {
        display: "inline-block",
        width: "86%", 
        textAlign: "left",
        verticalAlign: "top",  
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#373737', 
    },
    textPrimaryRelatoBlue: {
        width: "86%", 
        textAlign: "left",
        verticalAlign: "top",  
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#00b2a9', 
        display: "contents",
    },
    backgroundGrey: {
        background: '#f4f4f4',
        padding: '1em',
        borderRadius: '8px'
    },
    backgroundWhite: {
        background: '#fff',
        padding: '1em',
        borderRadius: '8px'
    },
    titleBlueDataCont: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '34px',
        color: '#00b2a9',
    },
    titleBlackDataCont: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#373737',
    },
    textPrimaryDeskDataCont: {
        display: "inline-block",
        width: "86%",
        textAlign: "left",
        verticalAlign: "top",
    },
    containerTextBoxDataCont: {
        textAlign: 'left',
    }
}));