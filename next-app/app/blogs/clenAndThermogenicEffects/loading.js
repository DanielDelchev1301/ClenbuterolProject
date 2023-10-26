import { Box, LinearProgress } from "@mui/material";

export default function Loading() {
    return (
        <div style={{width: '90%', backgroundColor: 'white', padding: '300px 0px', margin: 'auto'}}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </div>
    );
};