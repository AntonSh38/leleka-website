import { Field, Form } from "formik";
import React from "react";

export default function ProfileEditForm() {
  return (
    <div>
      <Form>
        <Field>Name</Field>
        <Field>Email</Field>
        <Field as:select></Field>
        <Field as:select></Field>
        <button>Відмінити зміни</button>
        <button>Зберегти зміни</button>
      </Form>
    </div>
  );
}
