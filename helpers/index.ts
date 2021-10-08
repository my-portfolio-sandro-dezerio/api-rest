import moment from "moment";

export default class Helpers {
	public static formatDateToString(date: moment.Moment, format: string) {
		return date.format(format);
	}
}