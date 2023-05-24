import {
  UNKNOWN_ERROR,
  NOT_AUTHORIZED,
  INVALID_CREDENTIALS
} from "constants/states";

export const ERRORS = {
  [UNKNOWN_ERROR]: "Unknown error",
  [NOT_AUTHORIZED]: "Please authorize your instance",
  [INVALID_CREDENTIALS]: "Please input valid credentials"
};
