export const ItemComponent: React.FC<Props> = ({}) => {
  return (
    <div className="flex p-2">
      <p className="mr-2">{component.quantity}</p>
      <p className="mr-2">{component.name}</p>
      <input
        className="bg-red-50 mr-2 px-2"
        placeholder="Preço"
        onChange={() => console.log(component)}
      >
        {component.price}
      </input>
    </div>
  );
};
