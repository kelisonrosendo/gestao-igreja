import moment from "moment";

const BR_DATE_FORMAT = "DD/MM/YYYY";
const BR_DATE_TIME_FORMAT = `${BR_DATE_FORMAT} HH:mm:ss`;

const DB_DATE_FORMAT = "YYYY-MM-DD";
const DB_DATE_TIME_FORMAT = `${DB_DATE_FORMAT}[T]HH:mm:ss`;

export const currentDate = (format = DB_DATE_FORMAT) => moment().format(format);

export const formatDate = (
  date: string,
  destinationFormat = BR_DATE_FORMAT,
  originFormat = DB_DATE_FORMAT
) =>
  moment(date, originFormat).isValid()
    ? moment(date, originFormat).format(destinationFormat)
    : "";

export const formatDateTime = (
  dateTime: string,
  destinationFormat = BR_DATE_TIME_FORMAT,
  originFormat = DB_DATE_TIME_FORMAT
) =>
  moment(dateTime, originFormat).isValid()
    ? moment(dateTime, originFormat).format(destinationFormat)
    : "";

export const formatDateRestore = (date: string) =>
  formatDate(date, DB_DATE_FORMAT, BR_DATE_FORMAT);
