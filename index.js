const fs = require('fs');
const Flickr = require('flickr-sdk');
const flickr = new Flickr(process.env.FLICKR_API_KEY);

// get public favorites by user id
const getPublicFavoritesForUser = async (params) => {
  try {
    const response = await flickr.favorites.getPublicList(params)
    return response.body.photos.photo
  } catch (err) {
    console.error('bonk', err);
  }
}

// get list of users from a gallery
const getUserIdsFromGalleryById = async (gallery_id) => {
  try {
    const response = await flickr.galleries.getPhotos({ gallery_id });
    return response.body.photos.photo.map(photo => photo.owner);
  } catch (err) {
    console.error('bonk', err);
  }
}

const outputTweets = async (user_id) => {
  (await getPublicFavoritesForUser({ user_id })).forEach(fave => {
    console.log(fave)
  })
}

const init = async (flickrApiKey) => {
  // get photos from the last N days -- change 6 to however many days you want (may be limited by Flickr API)
  const min_fave_date = new Date().setDate(new Date().getDate() - 6) / 1000;
  const userIds = await getUserIdsFromGalleryById(process.env.FLICKR_GALLERY_ID);
  const favorites = await Promise.all(userIds.map(async user_id => await getPublicFavoritesForUser({ user_id, min_fave_date })))
  const flatFaves = favorites.reduce((a, b) => a.concat(b), [])
  fs.writeFile('./src/photos.json', JSON.stringify(flatFaves), err => {
    if (err) {
      return console.error(err);
    }
    console.log("The file was saved!");
  });
};

// init();
outputTweets('38375540@N08')
