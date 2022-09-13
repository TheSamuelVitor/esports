// TSX = TypeScript XML
// XML = eXtensible Markup Language

/*
  Componentes: 
  - Devem vir com a letra maiscula;
  - Devem ser uma função;
  - No final deve ser exportado como default;
*/

function Botao2() {
  return (
    <button>
      Send
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Botao2 />
      <Botao2 />
      <Botao2 />
    </>
  )
}

export default App