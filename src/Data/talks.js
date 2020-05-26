import { calendar, location } from './icons'
export default [
  {
    path: 'https://smooth-as-silk.netlify.com/',
    heading: 'Smooth as Silk: A story of animating on the web with perf in mind',
    links: [{
      prefix: calendar,
      name: 'Nov 20, 2019',
      path: `https://www.meetup.com/Front-end-Forward/events/263961681/`
    }, {
      prefix: location,
      name: 'perf.now()',
      path: `https://www.voorhoede.nl/nl/events/perf-now/`
    }],
    description: `Website users want a smooth and engaging experience. In this talk we'll learn how browser rendering works and how to navigate DevTools to debug animation performance issues. There are optimal practices to bear in mind that are considerably overlooked. The main reason for this to happen is devs don't get a the picture why they exist and are so vigorously advocated. DevTools are gold mine of information, we are going to explore the features that help us build animations smooth as silk.)`,
  },
    {
      path: 'https://www.slideshare.net/piyukore06/debugging-perf-with-devtools-184030862',
      heading: 'Debugging Web Performance with Chrome dev tools',
      links: [{
        prefix: calendar,
        name: 'Oct 16, 2019',
        path: `#`
      }, {
        prefix: location,
        name: 'SWK Ruhr',
        path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/265064533/`
      }],
      description: `Performance is about retaining users, improving conversions, user experience. It's about people. DevTools performance tab as well as some hidden gems that you probably had no idea existed.`,
    },
    {
      path: 'https://www.meetup.com/NgNiederrhein/events/263357671/',
      heading: 'Keep calm and refactor',
      links: [{
        prefix: calendar,
        name: 'Aug 13, 2019',
        path: `#`
      }, {
        prefix: location,
        name: 'Ng Niederrhein',
        path: `https://twitter.com/NgNiederrhein`
      }],
      description: `JavaScript is just amazing for building complex UIs but it's easy to get lost, feel intimidated and feel out of place. We'll look at various patterns from JS-land. Take a step back, understand the abstraction, and see how we can refactor them in a best possible way.`,
    },
    {
        path: 'https://github.com/piyukore06/graphql',
        heading: 'Rest to GraphQL',
        links: [{
          prefix: calendar,
          name: 'Mar 20, 2019',
          path: `#`
        }, {
          prefix: location,
          name: 'SWK Ruhr',
          path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/258189377/`
        }],
        description: 'Frontend App APIs often gets complex as the application grows. Often there are multiple round trips required to fetch data for a view. It is a novel way of structuring the client-server contract.',
    },
    {
        path: 'http://parceljs-new-kid-on-the-block.surge.sh',
        heading: 'Parcel JS',
        links: [{
          prefix: calendar,
          name: 'Oct 17, 2018',
          path: `#`
        }, {
          prefix: location,
          name: 'SWK Ruhr',
          path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/252665300/`
        }],
        description: 'Frontend tooling just keeps getting better. Module bundlers can do so much for you. Be it providing you with a wonderful dev experience or optimizing your production build.'
    },
    {
        path: 'http://introduction-cypress-js.surge.sh',
        heading: 'Cypress JS: E2E done right',
        links: [{
          prefix: calendar,
          name: 'Aug 23, 2018',
          path: `#`
        }, {
          prefix: location,
          name: 'Mehrkanal GmbH',
          path: `http://mehrkanal.com/`
        }],
        description: 'Looking for a Tool to write E2E, well look no further, the most aweosme features of Cypress make it so easy to write and debug e2e tests as hassel free as you can imagine :)'
    },
    {
      path: 'https://github.com/piyukore06/create-a-webpack-plugin',
      heading: 'Writing your own webpack plugin',
      links: [{
        prefix: calendar,
        name: 'Feb 19, 2018',
        path: `#`
      }, {
        prefix: location,
        name: 'Mehrkanal GmbH',
        path: `http://mehrkanal.com/`
      }],
      description: `Webpack is highly configurable tool, you can make it do anything you want. Let's learn together about insides of webpack and how it allows to support the whole ecosystem of plugins and in turn how to bulid one.`
    }
  ]