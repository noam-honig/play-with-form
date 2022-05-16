import { Entity, Fields, Validators } from "remult";

@Entity("person",
    { allowApiCrud: true })
export class Person {
    @Fields.uuid()
    id?: string;

    @Fields.string({ validate: Validators.required })
    firstName = '';

    @Fields.string({ validate: Validators.required })
    lastName = '';

    @Fields.string({ validate: Validators.required })
    company = '';

    @Fields.integer()
    age = 0;

    @Fields.integer()
    visits = 0;

    @Fields.integer({ caption: "Profile Progress" })
    progress = 0;

    @Fields.string()
    status = '';
}