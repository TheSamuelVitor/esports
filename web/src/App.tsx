// TSX = TypeScript XML
// XML = eXtensible Markup Language

/*
  Componentes: 
  - Devem vir com a letra maiscula;
  - Devem ser uma função;
  - No final deve ser exportado como default;
  - São as tags HTML;

  Propriedades:
  - Atributos de um componente.
*/

// Criando a interface que será usada
interface ButtonProps {
  id: number
  title: string
}

{/* 
  Colchetes são necessarios para fazer o data binding
*/}
function Botao2(props: ButtonProps) {
  return (
    <button>
      {props.id} {props.title}
    </button>
  )
}

// Passando as propriedades passadas anteriormente na interface
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Botao2 id={1} title="Send" />
      <Botao2 id={2} title="Send" />
      <Botao2 id={3} title="Send" />
    </>
  )
}

export default App