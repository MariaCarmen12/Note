import { Links, LiveReload, Meta, Scripts } from '@remix-run/react';
import { Grid, MantineProvider, createEmotionCache } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import { NavbarNested } from 'src/components/NavbarNested/NavbarNested';
import { NavbarTypes } from 'src/components/NavbarTypes/NavbarTypes';
import { Notes } from 'src/components/Note/Note';
import { NoteProvider } from 'src/context/NoteContext';

createEmotionCache({ key: 'mantine' });


const AppState = ({children}:any) => {
  return(
 <NoteProvider>
  {children}
 </NoteProvider> 
  )
  }

export default function App() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          
          <Links />
        </head>
        <body>
          <AppState>
          <Grid>
            <NavbarNested />
            <NavbarTypes />
            <Notes />
          </Grid>
          </AppState>
       
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}

