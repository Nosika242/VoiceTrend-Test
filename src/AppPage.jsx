import { BlogProvider } from "./context/BlogContext";
import ThemedApp from "./ThemedApp";

function App() {
  return (
    <BlogProvider>
      <ThemedApp />
    </BlogProvider>
  );
}

export default App;
