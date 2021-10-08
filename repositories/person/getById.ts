import { RowDataPacket } from "mysql2";
import Database from "../../database";
import Person from "../../models/Person.model";

export const getById = async (id: number | string): Promise<Person | null> => {
	const db = new Database();

	const rows: RowDataPacket = await db.doQuery(
		`SELECT *
			FROM person
			WHERE id = ${db.escapeValue(id)}`
	);

	if(!rows.length) {
		return null;
	}

	const person: Person = Person.dataToClass(rows[0]);

	return person;
}