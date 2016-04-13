'use strict';

import gql from '../lib/graphql';

module.exports.handler = (event, context, cb) => {

  gql(event.query)
    .then((response) => cb(null, response))
    .catch((error) => cb(error));
}
