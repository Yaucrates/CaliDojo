import type { PageLoad } from './$types';

const prerender = true;

const meta = import.meta.glob('/src/docs/calisthenics/*/*');

export const load = (async () => {
    const topicsObj = {} as {
        [key: string]: {
            pageNumber: string;
            name: string | null;
            logo: {
                render: () => void;
            } | null;
        };
    };

    await Promise.all(
        Object.entries(meta).map(async ([path, loadPage]) => {
          const pageNumber = path
            .replace('/src/docs/calisthenics/', '')
            .split('-')[0];
          const pageType = path.split('/').reverse()[0];
      
          // If we haven't yet seen this pageNumber, create an empty record
          topicsObj[pageNumber] ||= { pageNumber, name: null, logo: null };
      
          if (pageType === 'Logo.svelte') {
            const page = (await loadPage()) as {
              default: {
                render: () => void
              };
            };
            topicsObj[pageNumber].logo = page.default;
          } else if (pageType === 'metadata.ts') {
            const page = (await loadPage()) as {
              metadata: {
                name: string;
              };
            };
            topicsObj[pageNumber].name = page.metadata.name;
          }
      
          return;
        })
      );

    const topics = Object.values(topicsObj);

    return {
        topics,
    };
}) satisfies PageLoad;