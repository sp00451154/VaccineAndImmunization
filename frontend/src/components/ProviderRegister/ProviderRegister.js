import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import base64 from "react-native-base64";
import { validatePassword, validateEmail, validateProviderName, validateAddress, validateState, validateZipCode } from "../../validations/validations";

class ProviderRegister extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            providerName: "",
            providerEmail: "",
            providerAddress: "",
            providerState: "",
            providerZipCode: "",
            password: "",
            cpassword: "",
          }}
          validate={(values) => {
            const errors = {};

            errors.providerName =
              validateProviderName(values.providerName, "Provider Name") || null;
            errors.providerEmail = 
                validateEmail(values.providerEmail, "Provider Email") || null;
            errors.providerAddress = 
                validateAddress(values.providerAddress, "Provider Address") || null;
            errors.providerState = 
                validateState(values.providerState, "Provider State") || null;
            errors.providerZipCode = 
                validateZipCode(values.providerZipCode, "Provider ZIP Code") || null;
            errors.password =
              validatePassword(values.password, "password") || null;
            errors.cpassword =
              validatePassword(
                values.cpassword,
                "cpassword",
                values.password
              ) || null;

            for (var key in errors) {
              if (errors[key] !== null) return errors;
            }
            return true;
          }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);

            if (!localStorage.getItem(values.userName)) {
              localStorage.setItem(
                values.userName,
                JSON.stringify({
                 providerName: values.providerName,
                providerEmail: base64.encode(values.email),
                providerAddress: base64.encode(values.providerAddress),
                providerState: values.providerState,
                  password: base64.encode(values.password),
                  isUserLoggedIn: false,
                })
              );

              ToastsStore.success("Provider registered successfully.");
              actions.resetForm();
            } else {
              ToastsStore.error("Provider already exists.");
            }
          }}
        >
          {(props) => (
            <div className="container mt-2 mb-4 divMiddle">
              <div className="col-sm-4 ml-auto mr-auto">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-signup"
                    role="tabpanel"
                    aria-labelledby="pills-signup-tab"
                  >
                    <div className="col-sm-12 border border-primary shadow rounded pt-2">
                      <div className="text-center">
                       
                      </div>
                      <form onSubmit={props.handleSubmit}>
                        <div className="form-group">
                          <label className="font-weight-bold">
                            Provider Name <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.providerName &&
                                props.touched.providerName &&
                                props.errors.providerName}
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider Name"
                            name="providerName"
                            className="form-control"
                            autoFocus="true"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.providerName}
                          />
                        </div>

                         <div className="form-group">
                          <label className="font-weight-bold">
                            Provider Email <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.providerEmail &&
                                props.touched.providerEmail &&
                                props.errors.providerEmail}
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider Email"
                            name="providerEmail"
                            className="form-control"
                            autoFocus="true"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.providerEmail}
                          />
                        </div>

                         <div className="form-group">
                          <label className="font-weight-bold">
                            Address <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.providerAddress &&
                                props.touched.providerAddress &&
                                props.errors.providerAddress}
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider Address"
                            name="providerAddress"
                            className="form-control"
                            autoFocus="true"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.providerAddress}
                          />
                        </div> 
                        
                         <div className="form-group">
                          <label className="font-weight-bold">
                            State <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.providerState &&
                                props.touched.providerState &&
                                props.errors.providerState}
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider State"
                            name="providerState"
                            className="form-control"
                            autoFocus="true"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.providerState}
                          />
                        </div> 

                        <div className="form-group">
                          <label className="font-weight-bold">
                            ZIP Code <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.providerZipCode &&
                                props.touched.providerZipCode &&
                                props.errors.providerZipCode}
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Provider State"
                            name="providerZipCode"
                            className="form-control"
                            autoFocus="true"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.providerZipCode}
                          />
                        </div>

                        <div className="form-group">
                          <label className="font-weight-bold">
                            Password <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.password &&
                                props.touched.password &&
                                props.errors.password}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="***********"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                          />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-bold">
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                            <span className="errorMsg">
                              {props.errors.cpassword &&
                                props.touched.cpassword &&
                                props.errors.cpassword}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="cpassword"
                            className="form-control"
                            placeholder="***********"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.cpassword}
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            <p>
                              Already have an account?{" "}
                              <Link to={"/"}>Sign In</Link>{" "}
                            </p>
                          </label>
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            name="signupsubmit"
                            value="Sign Up"
                            className="btn btn-block btn-primary"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      </div>
    );
  }
}

export default ProviderRegister;
