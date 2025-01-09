// src/components/Photo.js
const Photo = ({ foto }) => {
  return (
    <div className="photo">
      <img src={foto.url} alt={foto.nome} />
      <p>{foto.nome}</p>
    </div>
  );
};

export default Photo;
