import * as React from 'react';
import Button from '@mui/material/Button';
import {Snackbar, SnackbarCloseReason, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    content: string;
    status: string;
};

const SnackBar: React.FC<Props> = ({content, status}) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (status === 'success') {
            setOpen(true);
        }
    }, [status]);

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message={content}
                action={action}
                sx={{
                    '& .MuiSnackbarContent-root': {
                      backgroundColor: '#425664', // Tailwind 'accent' color
                    },
                  }}
            />
        </div>
    )
}

export default SnackBar;
