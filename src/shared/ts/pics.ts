import Unsplash, { toJson } from 'unsplash-js';

export const unsplash = new Unsplash({
    applicationId: "79e718bc41aa41752674224971270cf7faeebc618a573511ee8bcd7a460640ee",
    secret: "19d6bfc856496145f1c6aee9a745c39c1ea9908ae20758de440fb89d05cb7720"
});

export const defaultConfig: { query: string, count: number } = { query: "future", count: 10 };
