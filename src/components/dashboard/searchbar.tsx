import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function Searchbar() {
    return (
        <FormControl sx={{ margin: '0 auto', transform: { md: 'translateX(0)', lg: 'translateX(-200px)'} }} variant="outlined">
            <OutlinedInput
                sx={{
                    width: { xs: '18em', md: 'clamp(25em, 25vw, 30vw)', lg: '27vw', xl: '40vw' },
                    transition: 'width 0.2s, translate 1s',
                    height: '2.5em',
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fad4b7', // Customize the border color
                    },
                }}
                
                placeholder='Search'
                id="search-field"
                type={'text'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton sx={{
                            '&.MuiIconButton-root:hover': {
                                color: '#fad4b7'
                            }
                        }}
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}