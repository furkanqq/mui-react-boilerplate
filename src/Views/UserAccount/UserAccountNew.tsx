import * as React from 'react';
import FormDialog from '../../Components/FormDialog';
import CheckNotEmpty from '../../Utils/CheckNotEmpty';
import { UserNewForm } from './UserNewForm';

export default function UserAccountNew({ open, onClose }: any) {
    const formRef: any = React.useRef();

    const handleClose = (cancel: boolean) => {
        if (!cancel) {
            formRef.current.validateForm().then((va: any) => {
                if (!CheckNotEmpty(va)) {
                    const formValues = formRef.current.values;

                    console.log(formValues);

                    onClose && onClose(cancel);
                }
            });
        } else {
            onClose && onClose(cancel);
        }
    };

    return (
        <>
            <FormDialog
                title="Create User Account"
                open={open}
                onClose={handleClose}
            >
                <UserNewForm formRef={formRef} />
            </FormDialog>
        </>
    );
}
