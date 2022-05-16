# Play with form    
Ths project is intended to demonstrate a headless form that handles layout and validation, with flexible component rendering.

Review the [person.ts](tree/master/src/shared/Person.ts) file for the entity definition and validations. Because of remult these validations will happen both on the front end and the backend.

Review the [app.tsx](tree/master/src/app.tsx) for a usage example.

The [useInputArea](tree/master/src/utils/useInputArea.tsx) is a the headless part that manages it all.

The [Area.tsx](tree/master/src/utils/Area.tsx) is the code for application specific UI