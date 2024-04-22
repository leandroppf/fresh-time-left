/**
 * Get the date in Input type date format from the date locale string
 * @param {string} localeString
 * @returns {string} date in Input type date format
 */
export const getInputDateFromLocaleString = (localeString: string): string => {
  if (!localeString) return "";

  try {
    const dateString = localeString.split(", ")[0];
    const [month, day, year] = dateString.split("/");

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
  } catch (error) {
    console.error(
      "Please check the localeString format, ensure that is in .toLocaleString() format",
      error,
    );
    return "";
  }
};

/**
 * Get the time in Input type time format from the date locale string
 * @param {string} localeString
 * @returns {string} time in Input type time format
 */
export const getInputTimeFromLocaleString = (localeString: string): string => {
  if (!localeString) return "";

  try {
    const timeString = localeString.split(", ")[1];
    const [hour, minute] = timeString.split(":");

    return [hour, minute].join(":");
  } catch (error) {
    console.error(
      "Please check the localeString format, ensure that is in .toLocaleString() format",
      error,
    );
    return "";
  }
};
