import { Header } from "./components/common/Header";
import { PipelineCanvas } from "./components/common/PipelineCanvas";
import { SubmitButton } from "./components/common/SubmitButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <Header />
        <PipelineCanvas />
        <SubmitButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
