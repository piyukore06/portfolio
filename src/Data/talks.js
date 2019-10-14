import { calendar, location } from './icons'
export default [
  {
    path: 'https://ng-ind.com',
    heading: 'Perormance as an afterthought?',
    links: [{
      prefix: calendar,
      name: 'Feb 29, 2020',
      path: `#`
    }, {
      prefix: location,
      name: 'Ng India',
      path: `https://ng-ind.com`
    }],
    description: `Why performance is important? and how to go about it`,
  },
  {
    path: 'https://frontendfreunde.ms/#talks',
    heading: 'EcmaScript 2019 and beyond: A taste of future',
    links: [{
      prefix: calendar,
      name: 'Nov 21, 2019',
      path: `#`
    }, {
      prefix: location,
      name: 'Frontend Freunde',
      path: `https://frontendfreunde.ms`
    }],
    description: `ES2015 was a big leap. ES2016 and 2017 had some interesting nuggets. Some of the really long awaited features landed in ES2019 and roadmap for ES2020 and beyond looks stellar. Let's go through the whirlwind of new and shiny features of EcmaScript (already landed, approved and some interesting ones but not approved yet). How the browser support looks like and how it'll make our lives easier :)`,
  },
    {
      path: 'https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/265064533/',
      heading: 'Debugging Web Performance with Chrome dev tools',
      links: [{
        prefix: calendar,
        name: 'Oct 16, 2019',
        path: `#`
      }, {
        prefix: location,
        name: 'SWK Ruhr',
        path: `https://twitter.com/swk_ruhr`
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