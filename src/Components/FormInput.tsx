import { TextField } from '@mui/material';
import { Field } from 'formik';
import React from 'react';

export default function FormInput({ name, label, type }: any) {
    return (
        <Field name={name}>
            {({ field, meta }: any) => (
                <div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={name}
                        name={name}
                        label={label}
                        type={type}
                        fullWidth
                        variant="standard"
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                        {...field}
                    />
                </div>
            )}
        </Field>
    );
}
