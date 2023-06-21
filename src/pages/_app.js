import Navbar from '@/components/shared/navbar';
import '../styles/globals.css'
import { Box } from "@mui/material";

export default function MyApp({ Component, pageProps }) {
  return (
   
    <Box sx={{ display: 'flex' }}>
            <Navbar />
            
            {/*Main content*/ }
          <Box sx={{ flexGrow: 1, width: { sm: `calc(100% - 175px)` }, height: '100vh'}}>
                <Component {...pageProps} />
                {/*<Box sx={{ mt: '1em', ml: {xs: 0, sm: '1em'}, mr: {xs: 0, sm: '1em'} }}></Box>*/}
            </Box>
        </Box>
    
  );
  }