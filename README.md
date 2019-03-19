# Daily Flickr Faves

Get the latest favorite photos from the members of a given Flickr gallery. I personally use this to find new people to follow. First I build a small gallery of photos I really like, then I run this app to find photos that those people liked, and so on. This is a great way to find new LEGO MOCs (try gallery ID 72157707187816175)!

## Getting Started
```
// install dependendencies
npm install
// save the list of favorite photos to JSON
FLICKR_API_KEY=YOUR_API_KEY FLICKR_GALLERY_ID=YOUR_GALLERY_ID node index.js
// start React app to view photo thumbnails with links
npm start
```

### Wishlist

- include photos posted by members of gallery
- persist photo data to storage (DB, Google Sheets, etc.)
  - could use Google App Script to update a spreadsheet... and maybe run this script on a time-driven trigger
- create daily digest, with formats:
  - email
  - post to twitter (queue)
  - post to Slack
 