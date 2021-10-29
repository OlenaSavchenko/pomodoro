import { Formik, Form, Field, ErrorMessage } from "formik";

console.log(Field);
const TasksForm = () => {
    const handleFormSubmit = () => {

    }
    return (
        <>
            <h2>Add task</h2>
            <Formik initialValues={{ task: "" }} onSubmit={handleFormSubmit}>
                {({ isSubmitting }) => {
                    <Form>
                        <Field type="text" name="task" placeholder="enter task" component="input" />
                        <ErrorMessage component="div" name="task" />
                        <button type="submit" disabled={isSubmitting}>Add</button>
                    </Form>
                }}
            </Formik >

        </>)
}

export default TasksForm