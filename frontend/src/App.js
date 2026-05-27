import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./components/common/SubmitButton";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
