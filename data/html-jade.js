import {get} from './helpers';


const URL = 'https://lessig2016.us/wp-json/wp/v2/posts/8328';


export default get(URL, function handleGet(data) {

  return {
    name: data.title.rendered,
  };

});
