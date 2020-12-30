import App from "./App.svelte"
let message = "...loading"

const app = new App({
  target: document.body,
  props: {
    name: "Ben",
    message,
  },
})

export default app
