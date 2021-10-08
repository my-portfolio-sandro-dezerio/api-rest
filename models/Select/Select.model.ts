export default class Select {
	private label: string | number;
	private value: string | number;

	constructor(label: string | number, value: string | number) {
		this.label = label;
		this.value = value;
	}
}