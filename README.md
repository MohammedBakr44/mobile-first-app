# Acme Photography fictoinal app
This app is just a training but feel free to try it.
* It's an Advanced implementation from Brad Traversey's Poject "Build a Responsive, Mobile First Website - HTML5 & CSS3"

# Build and run

* just clone the repo with `git clone` and then run

```bash
yarn install # if you're using yarn
# And guess what
npm install # if you're using npm
```
* It's almost pure except for scroll animation which created by this cool library. Star him he is a cool guy `https://github.com/tarun-dugar/easy-scroll`.

* I'm using parcel as a module loader and bundler so just type in `yarn/npm run dev` and the app will be running in the same port as your password(I'm sorry, I'll never do it again)
`localhost:1234`.

* I almost forgot register in unsplash as a developer and create an application then use it to replace the `applicationID, seceret` in `ts/pics.ts` in order to get the API working if you won't to do that you can simply remove code from line `27` to `34` in `main.ts` this will not use the API the alternative solution is to refer to `source.unsplash.com` and then `Copy & Paste` the random line into `src` property in `img` element in `src/shared/pug/images/pug` And it'll do the same. I used API for training purposes nothing more.