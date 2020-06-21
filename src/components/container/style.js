import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        margin:'1em',
        backgroundColor:theme.palette.primary.main
    }
}));

export default useStyles;