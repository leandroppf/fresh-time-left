import { JSX } from "preact";

import { InputDate } from "../components/InputDate.tsx";
import { InputTime } from "../components/InputTime.tsx";
import { selectedDate, selectedTime } from "../utils/result.ts";

export default function DateTimePicker() {
  const handleDateChange = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    console.log(event.currentTarget.value);
    selectedDate.value = event.currentTarget.value;
  };

  const handleTimeChange = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    console.log(event.currentTarget.value);
    selectedTime.value = event.currentTarget.value;
  };

  return (
    <div class="flex gap-8 py-6">
      <InputDate
        onChange={(event) => handleDateChange(event)}
        value={selectedDate.value}
      />
      <InputTime
        onChange={(event) => handleTimeChange(event)}
        value={selectedTime.value}
      />
    </div>
  );
}
