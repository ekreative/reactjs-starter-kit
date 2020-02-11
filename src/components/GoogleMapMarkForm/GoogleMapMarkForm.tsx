import * as React from "react";
import { Formik, Form, Field } from "formik";
import { PElement } from "./GoogleMapMarkFormElements"
import GoogleMapReact from "google-map-react";
import GoogleMapsMarkContainer from "../GoogleMapsMark/GoogleMapsMarkContainer";
const uuidv1 = require("uuid/v1");

interface MyFormValues {
  title: string;
  lng: string;
  lat: string;
}

export const AddGoogleMapMarkForm = (props: any) => {
  const initialValues: MyFormValues = { title: "", lng: "", lat: "" };
  const GoogleMaps = (props: any) => {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "58vh", width: "99vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
          defaultCenter={{ lat: 49.5, lng: 32 }}
          defaultZoom={8}
        >
          {props.props.googleMap.map(
            (element: { lat: any; lng: number; text: string }, id: number) => {
              return (
                <GoogleMapsMarkContainer
                  key={id}
                  lat={element.lat}
                  lng={element.lng}
                  // @ts-ignore
                  element={element}
                />
              );
            }
          )}
        </GoogleMapReact>
      </div>
    );
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          //@ts-ignore
          props.createMapPoint(
            values.lat,
            values.lng,
            "newPointText",
            uuidv1()
          );
        }}
      >
        {formikBag => (
          <Form>
            <PElement>title</PElement>
            <Field
              name="title"
              // @ts-ignore
            >{({ field, form, meta }) => {
                return (
                  <div>
                    <input type="text" {...field} placeholder="Title" />
                    {meta.touched && meta.error && meta.error}
                  </div>
                );
              }}
            </Field>
            <PElement>lat</PElement>
            <Field
              name="lat"
              // @ts-ignore
            >{({ field, form, meta }) => {
                return (
                  <div>
                    <input type="text" {...field} placeholder="lat" />
                    {meta.touched && meta.error && meta.error}
                  </div>
                );
              }}
            </Field>
            <PElement>lng</PElement>
            <Field
              name="lng"
              // @ts-ignore
            >{({ field, form, meta }) => {
              return (
                <div>
                  <input type="text" {...field} placeholder="lng" />
                  {meta.touched && meta.error && meta.error}
                </div>
              );
            }}
            </Field>
            <button type={'submit'}>Submit</button>
          </Form>
        )}
      </Formik>
     <GoogleMaps props={props} />
    </div>
  );
};
