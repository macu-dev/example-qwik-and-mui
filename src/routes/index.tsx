import { component$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

import type { ApiResponse } from '~/models/api.interface';
import { qwikify$ } from "@builder.io/qwik-react";
import { CardWithMedia } from '~/components/cardWithMedia/cardWithMedia';
import Grid from '@mui/material/Grid';


export const useData = routeLoader$(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  return (await response.json()) as ApiResponse;
});



export default component$(() => {
  const characters = useData()
  const MUICard = qwikify$(CardWithMedia);
  const MUIGrid = qwikify$(Grid)

  return (
    <>
      <MUIGrid container spacing={2}>
        {characters.value.results?.map((character) => (
          <MUIGrid key={character.id} item lg={6}>
            <MUICard title={character.name} img={character.image} text={character.status}  />
          </MUIGrid>
          
        ))}
      </MUIGrid>
      
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
