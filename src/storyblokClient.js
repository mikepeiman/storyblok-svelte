import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: 'gDlW5wFiN5C9l8XRQzMg3gtt' // replace with your accessToken
})

export const defaultRequestConfig = {
  version: 'draft'
}

export default client