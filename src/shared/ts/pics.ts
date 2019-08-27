import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
    applicationId: "YOUR_APP_KEY",
    secret: "YOUR_SCERET_KEY"
});

export const defaultConfig: { query: string, count: number } = { query: "future", count: 10 };