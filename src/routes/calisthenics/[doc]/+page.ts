import type { PageLoad } from './$types';

export const load = (async ({params}) => {

    return {
        slug: params.doc,
    };
}) satisfies PageLoad;