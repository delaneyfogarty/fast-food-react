export default function InstructionsForm({ instructionsForm, handleSubmit, setInstructionsForm }) {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={instructionsForm} onChange={(e) => setInstructionsForm(e.target.value)} />
        <button>Add Instruction</button>
      </form>
    </section>
  );
}
