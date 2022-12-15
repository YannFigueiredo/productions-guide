import { RoutesApp } from "./routes";
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <RoutesApp/>
    </AppProviders>
  );
}

export default App;
