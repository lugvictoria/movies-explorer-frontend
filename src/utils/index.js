import { AnySchema } from "joi";
import { API_SERVICE, AUTH_ERROR, SIZE_CONFIG } from "../defines";
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

export function getSizeConfig() {
  const width = window.innerWidth;
  const config = SIZE_CONFIG.sort((a, b) => b.width - a.width);

  for (const it of config) {
    if (width >= it.width) return it;
  }

  return config[config.length - 1];
}

export function getSavedMovieDto(movie, ownerData = undefined) {
  const dto = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: API_SERVICE + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: API_SERVICE + movie.image.formats.thumbnail.url,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    movieId: movie.id,
  };

  if (ownerData) {
    dto["_id"] = ownerData?._id;
    dto["owner"] = ownerData?.owner;
  }

  return dto;
}

export function clearSavedMovieDto(savedMovie) {
  const { _id, owner, ...savedMovieDto } = savedMovie;
  return savedMovieDto;
}
