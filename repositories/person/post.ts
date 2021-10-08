import { RowDataPacket } from "mysql2";
import Database from "../../database";
import Helpers from "../../helpers";
import Person from "../../models/Person.model";

export const post = async (person: Person): Promise<Person> => {
	const db = new Database();

	const rows: RowDataPacket = await db.doQuery(
		`INSERT INTO person (
			first_name,
			last_name,
			date_of_birth,
			mobile_number,
			document_number,
			document_type
		) VALUES (
			${db.escapeValue(person.getFirstName)},
			${db.escapeValue(person.getLastName)},
			${db.escapeValue(Helpers.formatDateToString(person.getDateOfBirth, "YYYY-MM-DD"))},
			${db.escapeValue(person.getMobileNumber)},
			${db.escapeValue(person.getDocumentNumber)},
			${db.escapeValue(person.getDocumentType.getId)}
		)`
	);

	person.setId = rows.insertId;

	return person;
}