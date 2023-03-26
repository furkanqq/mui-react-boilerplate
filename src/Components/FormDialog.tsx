import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

export default function FormDialog({
    open,
    onClose,
    title,
    subtitle,
    children,
}: any) {
    const handleClose = (cancel: boolean) => {
        onClose && onClose(cancel);
    };

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent sx={{ minWidth: 400 }}>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => handleClose(false)}
                        variant="outlined"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => handleClose(true)}
                        variant="outlined"
                        color="error"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
