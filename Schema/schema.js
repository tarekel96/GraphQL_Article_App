const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const axios = require("axios");

const Articles = new GraphQLObjectType({
  name: "Articles",
  fields: () => ({
    // title: { type: GraphQLString },
    _id: { type: GraphQLInt }
  })
});

const KeyWords = new GraphQLObjectType({
  name: "KeyWords",
  fields: () => ({
    major: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    rank: {
      type: GraphQLInt
    },
    value: {
      type: GraphQLString
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    articles: {
      type: new GraphQLList(Articles)
    },
    keywords: {
      type: new GraphQLList(KeyWords),
      resolve(parent, args) {
        return axios
          .get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.NY_API_KEY}`
          )
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

// https://graphql.org/graphql-js/type/
// var AddressType = new GraphQLObjectType({
//         name: 'Address',
//         fields: {
//           street: { type: GraphQLString },
//           number: { type: GraphQLInt },
//           formatted: {
//             type: GraphQLString,
//             resolve(obj) {
//               return obj.number + ' ' + obj.street
//             }
//           }
//         }
//       });

//       var PersonType = new GraphQLObjectType({
//         name: 'Person',
//         fields: () => ({
//           name: { type: GraphQLString },
//           bestFriend: { type: PersonType },
//         })
//       });
