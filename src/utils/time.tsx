export function convertToTimestamp(dateTime: any) {
  try {
    let time = dateTime.slice(dateTime.indexOf(' '));
    let date = dateTime.slice(0, dateTime.indexOf(' '));
    let a =
      Date.parse(
        new Date(
          Date.UTC(
            date.slice(0, 4),
            date.slice(5, 7),
            date.slice(8, 10),
            time.slice(1, 3),
            time.slice(4, 6),
            time.slice(8, 9),
          ),
        ),
      ) / 1000;
    return a;
  } catch (error) {
    return dateTime;
  }
}

export function formatDate(
  dateTime: any,
  currentSeparator: string,
  newSeparator: string,
) {
  try {
    return dateTime.replaceAll(currentSeparator, newSeparator);
  } catch (error) {
    return dateTime;
  }
}

export function caculatorSeconds(startTime: any, endTime: any) {
  try {
    var secondBetweenTwoDate = Math.round(
      (startTime.getTime() - endTime.getTime()) / 1000,
    );
    return secondBetweenTwoDate;

    // return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  } catch (error) {
    console.log(error);
  }
}
