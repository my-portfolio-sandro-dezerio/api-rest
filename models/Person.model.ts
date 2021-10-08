import DocumentType from "./DocumentType.model";
import moment from "moment";

export default class Person {
	private id: number;
	private firstName: string;
	private lastName: string;
	private dateOfBirth: moment.Moment;
	private mobileNumber: number;
	private documentNumber: number;
	private documentType: DocumentType;

	get getId(): number {
		return this.id;
	}

	set setId(id: number) {
		this.id = id;
	}

	get getFirstName(): string {
		return this.firstName;
	}

	set setFirstName(firstName: string) {
		this.firstName = firstName;
	}

	get getLastName(): string {
		return this.lastName;
	}

	set setLastName(lastName: string) {
		this.lastName = lastName;
	}

	get getDateOfBirth(): moment.Moment {
		return this.dateOfBirth;
	}

	set setDateOfBirth(dateOfBirth: moment.Moment) {
		this.dateOfBirth = dateOfBirth;
	}

	get getMobileNumber(): number {
		return this.mobileNumber;
	}

	set setMobileNumber(mobileNumber: number) {
		this.mobileNumber = mobileNumber;
	}

	get getDocumentNumber(): number {
		return this.documentNumber;
	}

	set setDocumentNumber(documentNumber: number) {
		this.documentNumber = documentNumber;
	}

	get getDocumentType(): DocumentType {
		return this.documentType;
	}

	set setDocumentType(documentType: DocumentType) {
		this.documentType = documentType;
	}

	public static dataToClass(row: any): Person {
		const person: Person = new Person();

		person.setId = row.id;
		person.setFirstName = row.first_name;
		person.setLastName = row.last_name;
		person.setDateOfBirth = moment(row.date_of_birth);
		person.setMobileNumber = row.mobile_number;
		person.setDocumentNumber = row.document_number;

		const documentType: DocumentType = new DocumentType();

		documentType.setId = row.document_type;

		person.setDocumentType = documentType;

		return person;
	}
}