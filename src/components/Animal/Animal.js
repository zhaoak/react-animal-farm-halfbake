import './Animal.css';

export default function Animal({ prop }) {
  console.log(prop);
  return (
    <div className="animal" style={{ top: `${prop.top}`, left: `${prop.left}` }}>
      <img src={`./animals/${prop.type}.svg`} />
      <h3 className="animal name">{prop.name}</h3>
      <p>{prop.says}</p>
    </div>
  );
}
