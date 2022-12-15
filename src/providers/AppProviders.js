import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/Theme';
import GlobalStyles from '../globalStyles';
import MediasProvider from '../contexts/MediasContext';

export const AppProviders = ({ children }) => {
    return (
        <MediasProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </MediasProvider>
    )
  }
  