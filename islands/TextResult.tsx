import { useMemo } from "preact/hooks";
import { selectedDate, selectedTime } from "../utils/result.ts";

export default function TextResult() {
  const result = useMemo(() => {
    const dateString = selectedDate.value
      ? [
        "Date:",
        selectedDate.value,
      ].join(" ")
      : "";
    const timeString = selectedTime.value
      ? [
        "Time:",
        selectedTime.value,
      ].join(" ")
      : "";
    return [dateString, timeString].join(" ");
  }, [selectedDate.value, selectedTime.value]);

  return (
    <div class="flex flex-col items-center justify-center">
      <h2 class="text-2xl font-bold">Text Result</h2>
      <p class="my-4">{result}</p>
    </div>
  );
}
