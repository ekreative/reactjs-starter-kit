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
    (element: { pointId: any }) => {
      return element.pointId === props?.currentMarkId;
    }
  );
  let initialMarkCoordinates = (editableElement: any) => {
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
  const initialValues: { title: string } = { title: "" };
  const [zoom, setZoom] = useState(8);
  let tempZoom = 8;

  const GoogleMaps = (props: any) => {
    const handleClick = ({ x, y, lat, lng, event }: any) => {
      // @ts-ignore
      setFormValues({ x, y, lat, lng, event });
      console.log(formValues);
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
            lat={
              currentMarkId >= 0
                ? props.props.googleMap[currentMarkId].lat
                : formValues.lat
            }
            lng={
              currentMarkId >= 0
                ? props.props.googleMap[currentMarkId].lng
                : formValues.lng
            }
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
                  values.title
                );
              }
            : (values, actions) => {
                actions.setSubmitting(false);
                //@ts-ignore
                props.createMapPoint(
                  formValues.lat,
                  formValues.lng,
                  values.title,
                  uuidv1()
                );
              }
        }
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
