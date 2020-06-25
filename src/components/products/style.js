import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      containerForm:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        padding:"1em",
        alignItems: "center"
      
      },
      btn:{
        width:"50%",
      },
      input:{
        marginBottom:"2em"
      },
      offset: theme.mixins.toolbar,
      borde:{
        borderBottom:"gray solid 0.5px",
        borderTop:"gray solid 0.5px",
        padding:"1em"
      },
      containertable:{
        padding:"2em",
      },
      title:theme.mixins.toolbar,
      button: {
        backgroundColor:"#4caf50",
        color:theme.palette.common.white,
        margin: theme.spacing(1),
        "&:hover": {
          color:"#4caf50",
          backgroundColor:theme.palette.common.white,
          border:"#4caf50 solid 0.5px"
       
       }
    },
    
  }));

export default useStyles;