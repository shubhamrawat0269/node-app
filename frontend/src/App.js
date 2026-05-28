import { Toaster } from "react-hot-toast";
import { Header } from "./components/common/Header";
import { PipelineCanvas } from "./components/common/PipelineCanvas";
import { SubmitButton } from "./components/common/SubmitButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <ThemeProvider>
        <div className="container">
          <Header />
          <PipelineCanvas />
          <SubmitButton />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
