const models = require('../../models');

const profiles = [
  {
    first: 'John',
    last: 'Lennon',
    display: 'johnlennon',
    email: 'john@lennon.com',
    bio: 'I started the beatles...',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
  {
    first: 'Trey',
    last: 'Anastasio',
    display: 'treyanastasio',
    email: 'trey@phish.com',
    bio: 'gamehenge 4 life',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
  {
    first: 'Jake',
    last: 'Cinninger',
    display: 'JakeCinninger',
    email: 'Jake@Cinninger.com',
    bio: 'always melting face',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
  {
    first: 'Miles',
    last: 'Davis',
    display: 'MilesDavis',
    email: 'Miles@Davis.com',
    bio: 'cool cat',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
  {
    first: 'Herbie',
    last: 'Hancock',
    display: 'HerbieHancock',
    email: 'Herbie@Hancock.com',
    bio: 'fat albert',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
  {
    first: 'Stewart',
    last: 'Copeland',
    display: 'StewartCopeland',
    email: 'Stewart@Copeland.com',
    bio: 'keeping time',
    phone: 4155551234,
    zipCode: 'San Francisco, CA',
    searchRadius: 5,
    age: 40,
    gender: 'Male',
  },
];

module.exports = () => Promise.all(profiles.map(profile => models.Profile.forge(profile).save()));
