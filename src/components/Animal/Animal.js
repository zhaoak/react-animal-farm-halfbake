import './Animal.css';

export default function Animal({ prop }) {
  return (
    <div className="animal" style={{ top: `${prop.top}`, left: `${prop.left}` }}>
      <img src={`./animals/${prop.type}.svg`} />
      <p className="name">{prop.name}</p>
      <p>{prop.says}</p>
    </div>
  );
}
