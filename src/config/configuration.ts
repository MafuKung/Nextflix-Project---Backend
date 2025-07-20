export default () => ({
    tmdbApiKey: process.env.TMDB_API_KEY,
    tmdbBaseUrl: process.env.TMDB_BASE_URL,
    port: parseInt(process.env.PORT ?? '3333', 10),
});
