import { RowDataPacket } from "mysql2";
import Database from "../../database";
import Helpers from "../../helpers";
import Person from "../../models/Person.model";

export const put = async (person: Person, id: number) => {
	const db = new Database();

	const rows: RowDataPacket = await db.doQuery(
		`UPDATE person SET
			first_name = ${db.escapeValue(person.getFirstName)},
			last_name = ${db.escapeValue(person.getLastName)},
			date_of_birth = ${db.escapeValue(Helpers.formatDateToString(person.getDateOfBirth, "YYYY-MM-DD"))},
			mobile_number = ${db.escapeValue(person.getMobileNumber)},
			document_number = ${db.escapeValue(person.getDocumentNumber)},
			document_type = ${db.escapeValue(person.getDocumentType.getId)}
		 WHERE
		 	id = ${db.escapeValue(id)}`
	);
}