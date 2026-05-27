import { Header } from "./components/common/Header";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./components/common/SubmitButton";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <Header />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
