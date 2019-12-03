import React from "react";

import "./style.sass";

import { useForm, useField, splitFormProps } from "react-form";

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps
  } = useField(field, fieldOptions);

  // Build the field
  return (
    <div style={{position: 'relative', width: '90%'}}>
      <input {...getInputProps({ ref, ...rest })} />

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em className="info">Validating...</em>
      ) : isTouched && error ? (
        <strong className="info">{error}</strong>
      ) : message ? (
        <small className="info">{message}</small>
      ) : null}
    </div>
  );
});

export default () => {
  const defaultValues = React.useMemo(
    () => ({
      name: '',
      email: '',
      linkedIn: '',
      project: ''
    }),
    []
  );
  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    defaultValues,
    validate: values => {
      if (values.name === "tanner" && values.age !== "29") {
        return "This is not tanner's correct age";
      }
      return false;
    },
    onSubmit: async (values, instance) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
    },
    // debugForm: false
  });

  return (
    <Form className="contact-form">
      <div>
        <label>
          Name{" "}
          <InputField
            field="name"
            validate={value => (!value ? "Required" : false)}
          />
        </label>
      </div>
      <div>
        <label>
          Email{" "}
          <InputField
            field="email"
            validate={async value => {
              if (!value) {
                return "Email is required";
              }

              if (!validateEmail(value)) {
                return "Please enter a valid email addresss";
              }

              console.log(`Checking email: ${value}...`);

              // We're going to mock that for now
              await new Promise(resolve => setTimeout(resolve, 2000));

              return value === "tanner@gmail.com"
                ? "Email is already being used"
                : false;
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Linkedin{" "}
          <InputField
            field="linkedIn"
            validate={(value, { debounce, setMeta }) => {
              console.log("checkusername");
              if (!value) {
                return "Username is required";
              }

              return debounce(async () => {
                console.log("Checking username...");
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (value === "tanner") {
                  setMeta({ error: "Username is unavailable", message: null });
                  return;
                }

                setMeta({ error: null, message: "" });
              }, 2000);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Project{" "}
          <InputField field="project" />
        </label>
      </div>

      {isSubmitted ? <em>Thanks for submitting!</em> : null}

      {error ? <strong>{error}</strong> : null}

      {isSubmitting ? (
        "Submitting..."
      ) : (
          <div>
            <button type="submit" disabled={!canSubmit}>
              Submit
          </button>
          </div>
        )}
    </Form>
  );
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

