import * as React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '../../Components/FormInput';

interface MyFormValues {
    email: string;
    password: string;
}

export const UserNewForm = ({ formRef }: any) => {
    const initialValues: MyFormValues = { email: '', password: '' };
    return (
        <div>
            <Formik
                validateOnChange
                innerRef={formRef}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                validate={(values) => {
                    const errors: any = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
            >
                <Form>
                    <FormInput
                        name="email"
                        label="E Mail Address"
                        type="email"
                    />
                    <FormInput
                        name="password"
                        label="Password"
                        type="password"
                    />
                </Form>
            </Formik>
        </div>
    );
};
