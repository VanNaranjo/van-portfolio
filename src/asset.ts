// Resolves a file in public/ against the deploy base path (e.g. /van-portfolio/).
export const asset = (path: string) => encodeURI(import.meta.env.BASE_URL + path);
