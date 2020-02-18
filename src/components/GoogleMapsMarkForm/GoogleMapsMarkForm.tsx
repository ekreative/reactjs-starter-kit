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
  let editableElement = props.googleMap.findIndex(
    (element: { pointId: string }) => {
      return element.pointId === props?.currentMarkId;
    }
  );
  let initialMarkCoordinates = (editableElement: number) => {
    if (editableElement >= 0) {
      return {
        lat: props.googleMap[currentMarkId].lat,
        lng: props.googleMap[currentMarkId].lng
      };
    } else return { lat: 49.5, lng: 32 };
  };
  const [currentMarkId] = useState(editableElement);
  const [formValues, setFormValues] = useState(
    initialMarkCoordinates(editableElement)
  );
  const initialValues: { title: string } = { title: props?.googleMap[editableElement]?.newPointText };
  const [zoom, setZoom] = useState(8);
  let tempZoom = 8;

  const GoogleMaps = (props: any) => {
    const handleClick = ({ lat, lng }: any) => {
      setFormValues({ lat, lng });
      setZoom(tempZoom);
    };

    return (
      // Important! Always set the container height explicitly
      <GoogleMapsNewMarkWrapperElement>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_rxY1EtLVw7vFxaxwTpUZtaxf9SCzVWg" }}
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
          />
        </GoogleMapReact>
      </GoogleMapsNewMarkWrapperElement>
    );
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        //@ts-ignore
        onSubmit={
          currentMarkId >= 0
            ? (values, actions) => {
                props.changeGoogleMapMarkText(
                  props.googleMap[currentMarkId].pointId,
                  values.title,
                  formValues.lat,
                  formValues.lng
                );
              }
            : (values, actions) => {
                actions.setSubmitting(false);
                props.createMapPoint(
                  formValues.lat,
                  formValues.lng,
                  values.title,
                  uuidv1()
                );
                props.history.push(`/googleMaps`);
              }
        }
      >
        {formikBag => (
          <Form>
            <PElement>title</PElement>
            <Field name="title">
              {({ field, form, meta }: any) => {
                return (
                  <div>
                    <input
                      type="text"
                      {...field}
                      placeholder="Title"
                    />
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
