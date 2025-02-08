function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>
        {name}
        {id}
      </h2>
    </div>
  );
}
export default Component;
