import { AnySchema } from "joi";
import { AUTH_ERROR } from "../defines";
import FormValidate from "./FormValidate";

export function validateJsonByJoiSchema(json, schema, initial) {
  if (!json) return { value: initial, error: false };

  const handleError = (err) => {
    console.error(err);
    return { value: initial, error: true };
  };

  try {
    const state = JSON.parse(json);
    const { value, error, warning } = schema.validate(state);

    if (error) return handleError(error);
    if (warning) console.warn(warning);

    return { value, error: false };
  } catch (e) {
    return handleError(e);
  }
}

export function toCapitalize(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}

export function validateJson(json) {
  if (typeof json !== "string")
    return { result: false, value: json };

  try {
    return { result: true, value: JSON.parse(json) };
  } catch (e) {
    return { result: false, value: json };
  }
}

export function validateFormField(value, validateModule) {
  if (!["testName", "testEmail", "testPassword"].includes(validateModule))
    throw new TypeError("Не валидный параметр validateModule");

  return !value ? AUTH_ERROR.EMPTY : (() => {
    const test = FormValidate[validateModule](value);
    return test.status ? "" : test.error;
  })();
}
