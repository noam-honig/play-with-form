import { useEffect } from "react";
import { remult } from "./common";
import { Person } from "./shared/Person";
import { Area, RenderInput, RenderSelect } from "./utils/Area";
import { useInputArea } from "./utils/useInputArea";

const personRepo = remult.repo(Person);
const p = personRepo.metadata.fields;
function App() {
  const options = useInputArea<Person>({
    renderInput: RenderInput,
    layout: [
      [
        [
          { key: 'firstName' }, //example using member keys
          p.lastName //example using remult field metadata
        ],
        p.company
      ],
      [[p.age, p.visits],
      [p.progress, {
        ...p.status,
        renderInput: RenderSelect(["complicated", "single", "married"])
      }]]
    ]
  });
  useEffect(() => {
    personRepo.findFirst().then(options.setState);
  }, []);
  const save = async () => {
    try {
      await personRepo.save(options.state).then(options.setState);
    }
    catch (error: any) {
      options.setError(error);
    }
  }
  return (
    <div style={{ maxWidth: 300, padding: 16 }}>
      <Area options={options} />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default App;