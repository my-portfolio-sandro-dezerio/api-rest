export default class DocumentType {
	private id: string;
	private description: string;
	private active: boolean;

	get getId(): string {
		return this.id;
	}

	set setId(id: string) {
		this.id = id;
	}

	get getDescription(): string {
		return this.description;
	}

	set setDescription(description: string) {
		this.description = description;
	}

	get getActive(): boolean {
		return this.active;
	}

	set setActive(active: boolean) {
		this.active = active;
	}
}