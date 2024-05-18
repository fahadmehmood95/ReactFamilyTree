export function transformData(data) {
  const transformAnimal = (animal) => {
    const { name, sire, dam } = animal;
    return {
      name,
      children: [
        ...(sire ? [transformAnimal(sire)] : []),
        ...(dam ? [transformAnimal(dam)] : []),
      ],
    };
  };

  const root = transformAnimal(data.animal);
  root.children.push(
    ...data.children.map((child) => ({
      name: child.name,
      children: child.children.map((grandChild) => ({
        name: grandChild.name,
        children: [],
      })),
    }))
  );

  return root;
}
