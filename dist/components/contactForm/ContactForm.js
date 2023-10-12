import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormLabel, ErrorMessage, ButtonSubmit, } from './ContactForm.styled';
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
        .trim(),
    number: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
});
export const ContactForm = ({ onSubmitForm }) => {
    return (_jsx(Formik, { initialValues: { name: '', number: '' }, validationSchema: ContactSchema, onSubmit: (values, actions) => {
            const { name, number } = values;
            onSubmitForm(name, number);
            actions.resetForm();
        }, children: _jsxs(Form, { children: [_jsxs(FormLabel, { children: ["Name", _jsx(Field, { type: "text", name: "name", title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" }), _jsx(ErrorMessage, { name: "name", component: "span" })] }), _jsxs(FormLabel, { children: ["Number", _jsx(Field, { type: "tel", name: "number", title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" }), _jsx(ErrorMessage, { name: "number", component: "span" })] }), _jsx(ButtonSubmit, { type: "submit", children: "Add contact" })] }) }));
};
//# sourceMappingURL=ContactForm.js.map