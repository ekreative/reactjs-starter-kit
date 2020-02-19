import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  PElement,
  GoogleMapsNewMarkWrapperElement
} from "./GoogleMapsMarkFormElements";
import GoogleMapReact from "google-map-react";
import GoogleMapsNewMarkContainer from "../GoogleMapsNewMark/GoogleMapsNewMarkContainer";
const uuidv1 = require("uuid/v1");

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
  const [initialValues] = useState(
    editableElement >= 0
      ? {
          title: props?.googleMap[editableElement]?.newPointText
        }
      : { title: "" }
  );
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
                if (window.confirm("change title???")) {
                  props.changeGoogleMapMarkText(
                    props.googleMap[currentMarkId].pointId,
                    values.title,
                    formValues.lat,
                    formValues.lng
                  );
                  window.history.back();
                }
              }
            : (values, actions) => {
                if (window.confirm("add new Mark???")) {
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
        }
      >
        {formikBag => (
          <Form>
            <PElement>title</PElement>
            <Field name="title">
              {(props: any) => {
                console.log(props);
                return (
                  <div>
                    <input
                      type="text"
                      {...props.field}
                      placeholder="Title"
                      value={props.field.value}
                    />
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
