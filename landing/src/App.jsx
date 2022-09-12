import { CssBaseline } from "@mui/material";
import { AppNavigation } from "./routes/AppNavigation";
import { AppTheme } from "./theme/AppTheme";
function App() {
  return (
    <AppTheme>
      <CssBaseline />
      <AppNavigation />
    </AppTheme>
  );
}

export default App;
