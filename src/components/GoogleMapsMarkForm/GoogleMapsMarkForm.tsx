import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { PElement } from "./GoogleMapsMarkFormElements";
import GoogleMapReact from "google-map-react";
import GoogleMapsNewMarkContainer from "../GoogleMapsNewMark/GoogleMapsNewMarkContainer";
const uuidv1 = require("uuid/v1");

interface MyFormValues {
  title: string;
  lng: string;
  lat: string;
}

export const AddGoogleMapMarkForm = (props: any) => {
  const [formValues, setFormValues] = useState({lat: 49.5, lng: 32, });
  const initialValues: MyFormValues = { title: "", lng: "", lat: "" };
  const GoogleMaps = (props: any) => {

    const handleClick = ({ x, y, lat, lng, event }: any) =>
      // @ts-ignore
      setFormValues({ x, y, lat, lng, event });

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "58vh", width: "99vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
          // @ts-ignore
          defaultCenter={{ lat: formValues.lat, lng: formValues.lng }}
          defaultZoom={8}
          onClick={handleClick}
        >
          <GoogleMapsNewMarkContainer lat={formValues.lat}
                                      lng={formValues.lng}
                                      text={'55555'}/>
        </GoogleMapReact>
      </div>
    );
  };
  console.log(333, formValues);
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
            {/*<PElement>lat</PElement>*/}
            {/*<Field*/}
            {/*  name="lat"*/}
            {/*  // @ts-ignore*/}
            {/*>{({ field, form, meta }) => {*/}
            {/*    return (*/}
            {/*      <div>*/}
            {/*        <input*/}
            {/*          type="text"*/}
            {/*          {...field}*/}
            {/*          placeholder="for example: 49.5"*/}
            {/*          value={formValues.lat}*/}
            {/*        />*/}
            {/*        {meta.touched && meta.error && meta.error}*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  }}*/}
            {/*</Field>*/}
            {/*<PElement>lng</PElement>*/}
            {/*<Field*/}
            {/*  name="lng"*/}
            {/*  // @ts-ignore*/}
            {/*>{({ field, form, meta }) => {*/}
            {/*    return (*/}
            {/*      <div>*/}
            {/*        <input*/}
            {/*          type="text"*/}
            {/*          {...field}*/}
            {/*          placeholder="for example: 32"*/}
            {/*        />*/}
            {/*        {meta.touched && meta.error && meta.error}*/}
            {/*      </div>*/}
            {/*    );*/}
            {/*  }}*/}
            {/*</Field>*/}
            <button type={"submit"}>Submit</button>
          </Form>
        )}
      </Formik>
      <GoogleMaps props={props} />
    </div>
  );
};
