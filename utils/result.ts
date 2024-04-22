import { signal } from "@preact/signals";

import {
  getInputDateFromLocaleString,
  getInputTimeFromLocaleString,
} from "./dateTime.ts";

const dateTimeNow = new Date().toLocaleString();
const dateNow = getInputDateFromLocaleString(dateTimeNow);
const timeNow = getInputTimeFromLocaleString(dateTimeNow);

export const selectedDate = signal<string>(dateNow);
export const selectedTime = signal<string>(timeNow);
