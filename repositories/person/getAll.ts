import { RowDataPacket } from "mysql2";
import Database from "../../database";
import Person from "../../models/Person.model";

export const getAll = async (): Promise<Person[]> => {
	const db = new Database();

	const rows: RowDataPacket = await db.doQuery(
		`SELECT *
			FROM person`
	);

	const persons: Person[] = [];

	for (const row of Object.values(rows)) {
		persons.push(Person.dataToClass(row));
	}

	return persons;
}