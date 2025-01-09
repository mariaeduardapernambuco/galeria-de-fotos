import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Photo from "./components/Photo";

const App = () => {
  const [fotos, setFotos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [modalFoto, setModalFoto] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const fotosPorPagina = 6;

  useEffect(() => {
    setFotos([
      {
        id: 1,
        nome: "Olinda",
        url: "https://plus.unsplash.com/premium_photo-1700869229387-51e355ff06f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        nome: "Bonito",
        url: "https://images.unsplash.com/photo-1642856256537-5e3e62093d61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        nome: "Noronha",
        url: "https://images.unsplash.com/photo-1584718143687-a41c3a5173be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        nome: "Recife",
        url: "https://images.unsplash.com/photo-1667314200608-9823df705cc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        nome: "Tamandaré",
        url: "https://images.unsplash.com/photo-1713112874630-4325e65570a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        nome: "Porto de Galinhas",
        url: "https://images.unsplash.com/photo-1698760042584-20ec778e665b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        nome: "Crianças mergulhando num lindo mar azul",
        url: "https://images.unsplash.com/photo-1509320076471-2ad170ee9db7?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 8,
        nome: "Arquitetura",
        url: "https://images.unsplash.com/photo-1658044552331-e95201665f24?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        nome: "Igreja",
        url: "https://images.unsplash.com/photo-1626830535357-ad29b13255af?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 10,
        nome: "Rio",
        url: "https://images.unsplash.com/photo-1603753738412-3b07e32b434e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ]);
  }, []);

  const fotosFiltradas = fotos.filter((foto) =>
    foto.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const fotosParaExibir = fotosFiltradas.slice(
    (paginaAtual - 1) * fotosPorPagina,
    paginaAtual * fotosPorPagina
  );

  const mudarPagina = (numeroPagina) => setPaginaAtual(numeroPagina);

  const abrirModal = (foto) => {
    setModalFoto(foto);
  };

  const fecharModal = () => {
    setModalFoto(null);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <h1>Galeria de Fotos</h1>
      </header>
      <button onClick={toggleTheme}>Alternar Tema</button>
      <SearchBar filtro={filtro} setFiltro={setFiltro} />
      <div className="gallery">
        {fotosParaExibir.map((foto) => (
          <div key={foto.id} onClick={() => abrirModal(foto)}>
            <Photo foto={foto} />
          </div>
        ))}
      </div>

      {modalFoto && (
        <div className="modal" onClick={fecharModal}>
          <img src={modalFoto.url} alt={modalFoto.nome} />
          <p>{modalFoto.nome}</p>
        </div>
      )}

      <div className="pagination">
        {Array.from({
          length: Math.ceil(fotosFiltradas.length / fotosPorPagina),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => mudarPagina(index + 1)}
            className={paginaAtual === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <footer>
        <p>
          © 2024 Galeria de Fotos. Todos os direitos reservados
          @eduardapernambuco.
        </p>
      </footer>
    </div>
  );
};

export default App;
