import InstagramRecord from 'baconbots/models/instagram-record';
import Ember from 'ember';

var instagramData = [
  {
    "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xfp1/t51.2885-15/10362300_644547672286792_1513123022_n.jpg",
    "caption": "#vscocam off to the park",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/oYSoTDJFgR/",
    "date": "1400934441"
  },
  {
    "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xpf1/t51.2885-15/10358317_241593146031490_450678713_n.jpg",
    "caption": "Crazy good weather for my last few hours in NYC. Wrapping up post #laracon vacation! #vscocam",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/oLuDbSJFpc/",
    "date": "1400512611"
  },
  {
    "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10387780_1418102545130779_663967169_n.jpg",
    "caption": "#vscocam Oh Melman, you broke their clock!",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/oHIgu6pFt5/",
    "date": "1400358711"
  },
  {
    "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xpf1/t51.2885-15/10246031_715271318530600_20626908_n.jpg",
    "caption": "One last song @bastilledan",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/nW8XQupFpb/",
    "date": "1398741729"
  },
  {
    "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10326546_619727448112211_1311109256_n.jpg",
    "caption": "@bastilledan again again",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/nW8H93JFpO/",
    "date": "1398741604"
  },
  {
    "imageUrl": "http://scontent-b.cdninstagram.com/hphotos-xfp1/t51.2885-15/10268982_614437778652296_2059390825_n.jpg",
    "caption": "Bastille #unoMas? #cover",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/nW71iepFpB/",
    "date": "1398741453"
  },
  {
    "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10245924_811106598917044_1267580591_n.jpg",
    "caption": "Bastille concert // @melissakereji @ohwhereiswesley #vscocam",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/nW5DlvJFll/",
    "date": "1398739995"
  },
  {
    "imageUrl": "http://scontent-a.cdninstagram.com/hphotos-xpf1/t51.2885-15/1724825_268535353309020_1225798268_n.jpg",
    "caption": "#vscocam Percy Warner Park",
    "username": "rtablada",
    "linkUrl": "http://instagram.com/p/kvJbiMJFnk/",
    "date": "1393111435"
  }
];

var arrayProxy = Ember.ArrayProxy.create({
  content: instagramData
});

export default arrayProxy.map(function (instagramRaw) {
  return InstagramRecord.create(instagramRaw);
});

