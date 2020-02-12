import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  PElement,
  GoogleMapsNewMarkWrapperElement
} from "./GoogleMapsMarkFormElements";
import GoogleMapReact from "google-map-react";
import GoogleMapsNewMarkContainer from "../GoogleMapsNewMark/GoogleMapsNewMarkContainer";
const uuidv1 = require("uuid/v1");

interface MyFormValues {
  title: string;
  lng: string;
  lat: string;
}

export const AddGoogleMapMarkForm = (props: any) => {
  const [formValues, setFormValues] = useState({ lat: 49.5, lng: 32 });
  const initialValues: { title: string } = { title: "" };
  const [zoom, setZoom] = useState(8);
  let tempZoom = 8;

  const GoogleMaps = (props: any) => {
    const handleClick = ({ x, y, lat, lng, event }: any) => {
      // @ts-ignore
      setFormValues({ x, y, lat, lng, event });
      setZoom(tempZoom);
    };
    return (
      // Important! Always set the container height explicitly
      <GoogleMapsNewMarkWrapperElement>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
          // @ts-ignore
          defaultCenter={{ lat: formValues.lat, lng: formValues.lng }}
          defaultZoom={zoom}
          onClick={handleClick}
          onZoomAnimationEnd={e => {
            tempZoom = e;
          }}
        >
          <GoogleMapsNewMarkContainer
            lat={formValues.lat}
            lng={formValues.lng}
            text={"55555"}
          />
        </GoogleMapReact>
      </GoogleMapsNewMarkWrapperElement>
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
            formValues.lat,
            formValues.lng,
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
            <button type={"submit"}>Submit</button>
          </Form>
        )}
      </Formik>
      <GoogleMaps props={props} />
    </div>
  );
};
