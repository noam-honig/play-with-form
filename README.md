# Play with form    
Ths project is intended to demonstrate a headless form that handles layout and validation, with flexible component rendering.

Review the [person.ts](src/shared/Person.ts) file for the entity definition and validations. Because of remult these validations will happen both on the front end and the backend.

Review the [app.tsx](src/app.tsx) for a usage example.

The [useInputArea](src/utils/useInputArea.tsx) is a the headless part that manages it all.

The [Area.tsx](src/utils/Area.tsx) is the code for application specific UI