import ConvertFileForm from "./components/ConvertFileForm";
import Logo from "./components/Logo";

function App() {
  return (
    <div data-theme="dim">
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-10 space-y-30">
        <h1 className="text-5xl font-bold mb-30 text-primary">
          DOCX to PDF Converter
        </h1>

        <ConvertFileForm />

        <Logo />
      </div>
    </div>
  );
}

export default App;
