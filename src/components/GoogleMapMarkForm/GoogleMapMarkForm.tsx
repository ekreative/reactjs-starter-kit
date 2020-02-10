import * as React from "react";
import {
  Formik,
  Form,
  Field,
} from "formik";

interface MyFormValues {
  title: string;
  lng: string;
  lat: string;
}
interface ISome {
  createMapPoint: (lat: any, lng: any, newPointText: string, pointId: string) => {};
}

const handleClick = (e: any) => {
console.log(121212, e)
}

export const AddGoogleMapMarkForm: React.FC<{}> = (props) => {
  const initialValues: MyFormValues = { title: "", lng: "", lat: "" };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(555, { values, actions });
          actions.setSubmitting(false);
          //@ts-ignore
          props.createMapPoint(values.lat, values.lng, 'newPointText', 'pointId')
        }}>
        {formikBag => (
          <Form>
            <p>title</p>
            <Field
              // @ts-ignore
              name="title">{({ field, form, meta }) => {
              console.log(111, form.values)
              return (
                <div>
                  <input type="text" {...field} placeholder="Title" />
                  {meta.touched && meta.error && meta.error}
                </div>
              );
            }}
            </Field>
            <p>lng</p>
            <Field
              // @ts-ignore
              name="lng">{({ field, form, meta }) => {
              return (
                <div>
                  <input type="text" {...field} placeholder="lng" />
                  {meta.touched && meta.error && meta.error}
                </div>
              );
            }}
            </Field>
            <p>lat</p>
            <Field
              // @ts-ignore
              name="lat">{({ field, form, meta }) => {
              return (
                <div>
                  <input type="text" {...field} placeholder="lat" />
                  {meta.touched && meta.error && meta.error}
                </div>
              );
            }}
            </Field>
            <button>Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
};
