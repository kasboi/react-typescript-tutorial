type Example = React.FormEventHandler<HTMLDivElement> | undefined

export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={2}
      // How do I figure out what type onChange expects?
      onChange={(e) => {}}

      // How do I get autocomplete with JSX?
    />
  );
};
