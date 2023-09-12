import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

const AlreadyConvincedSection = () => {
  return (
    <Box id="eloNft" 
      sx={{
        py: 7,
        textAlign: 'center',
        bgcolor: 'neutral.main',
        borderTop: 1, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Button
          component={Link}
          to="/pre-sale"
          disableElevation 
          variant="contained" 
          endIcon={<ArrowForwardIcon />}>
          Get $ELO Now
        </Button>
      </Container>
    </Box>
  );
}
 
export default AlreadyConvincedSection;
