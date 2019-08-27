import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
    applicationId: "YOUR_APPLICATION_ID",
    secret: "YOUR_SECRET_ID"
});

export const defaultConfig: { query: string, count: number } = { query: "future", count: 10 };