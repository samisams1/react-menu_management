import { MenuPage, SidebarMenu, Topbar } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
//import store from './store'; // import your Redux store
import store from './store/store';
import { Provider } from 'react-redux';


const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <Provider store={store}>
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <main className="app">
            <SidebarMenu />
            <section className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/menus" element={<MenuPage />} />
                <Route path="/system-code" element={<MenuPage />} />
                <Route path="/system" element={<MenuPage />} />
                <Route path="/properties" element={<MenuPage />} />
                <Route path="/apis" element={<MenuPage />} />
                <Route path="/users" element={<MenuPage />} />
                <Route path="/competition" element={<MenuPage />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </Provider>
  )
}

export default App