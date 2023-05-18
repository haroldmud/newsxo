import { Articles } from "./article"
import { Sources } from "./article";

export const sampleArray =[
  { source: { "id": "engadget", "name": "Engadget" }, author: "Jon Fingas", title: "Apple Watch Series 9 may finally get a new processor", description: "The Apple Watch has effectively used the same processor since the S6 inside 2020's Series 6, but it's apparently poised for a long-due upgrade. Bloomberg's Mark Gurman tells subscribers in his newsletter Discord channel that Apple Watch Series 9 will reported…", url: "https://www.engadget.com/apple-watch-series-9-may-finally-get-a-new-processor-151516259.html", urlToImage: "https://s.yimg.com/uu/api/res/1.2/ovCEHeO.oc9YDmz.wbsKUQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/398c6da0-ee67-11ed-bfa7-872a4ff5351c.cf.jpg", publishedAt: "2023-05-09T15:15:16Z", content: "The Apple Watch has effectively used the same processor since the S6 inside 2020's Series 6, but it's apparently poised for a long-due upgrade. Bloomberg's Mark Gurman tells subscribers in his newsle… [+1330 chars]" }, { source: { "id": "engadget", "name": "Engadget" }, author: "Jon Fingas", title: "Facebook Messenger app for Apple Watch is going away after May 31st", description: "Say goodbye to another high-profile Apple Watch app. As MacRumorsnotes, Meta is telling Facebook Messenger users that the Apple Watch version will be unavailable after May 31st. While you'll still get message notifications beyond that point, you won't have th…", url: "https://www.engadget.com/facebook-messenger-app-for-apple-watch-is-going-away-after-may-31st-180252947.html", urlToImage: "https://s.yimg.com/uu/api/res/1.2/VAmzs9IyeEdG9udz_w8ysg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/0ffe5f40-f01d-11ed-9cfe-ec5349e218a7.cf.jpg", publishedAt: "2023-05-11T18:02:52Z", content: "Say goodbye to another high-profile Apple Watch app. As MacRumorsnotes, Meta is telling Facebook Messenger users that the Apple Watch version will be unavailable after May 31st. While you'll still ge… [+1600 chars]" }, 
   { source: { "id": null, "name": "Lifehacker.com" }, 
   author: "Jake Peterson", 
   title: "You Can Finally Use Final Cut Pro and Logic Pro on Your iPad", 
   description: "Every once in a while, Apple really surprises me. Today is one of those times: The company just announced is finally bringing Final Cut Pro and Logic Pro to the iPad, and with it, the tools to produce professional videos and music using a touch-screen device.…", 
   url: "https://lifehacker.com/you-can-finally-use-final-cut-pro-and-logic-pro-on-your-1850418917", 
   urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0ee8f44afbfa6844936829c893853a6b.jpg", 
   publishedAt: "2023-05-09T19:00:00Z", 
   content: "Every once in a while, Apple really surprises me. Today is one of those times: The company just announced is finally bringing Final Cut Pro and Logic Pro to the iPad, and with it, the tools to produc… [+5141 chars]" }, { source: { "id": "engadget", "name": "Engadget" }, author: "Jon Fingas", title: "Apple Watch Series 9 may finally get a new processor", description: "The Apple Watch has effectively used the same processor since the S6 inside 2020's Series 6, but it's apparently poised for a long-due upgrade. Bloomberg's Mark Gurman tells subscribers in his newsletter Discord channel that Apple Watch Series 9 will reported…", url: "https://www.engadget.com/apple-watch-series-9-may-finally-get-a-new-processor-151516259.html", urlToImage: "https://s.yimg.com/uu/api/res/1.2/ovCEHeO.oc9YDmz.wbsKUQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/398c6da0-ee67-11ed-bfa7-872a4ff5351c.cf.jpg", publishedAt: "2023-05-09T15:15:16Z", content: "The Apple Watch has effectively used the same processor since the S6 inside 2020's Series 6, but it's apparently poised for a long-due upgrade. Bloomberg's Mark Gurman tells subscribers in his newsle… [+1330 chars]" }, { source: { "id": "engadget", "name": "Engadget" }, author: "Jon Fingas", title: "Facebook Messenger app for Apple Watch is going away after May 31st", description: "Say goodbye to another high-profile Apple Watch app. As MacRumorsnotes, Meta is telling Facebook Messenger users that the Apple Watch version will be unavailable after May 31st. While you'll still get message notifications beyond that point, you won't have th…", url: "https://www.engadget.com/facebook-messenger-app-for-apple-watch-is-going-away-after-may-31st-180252947.html", urlToImage: "https://s.yimg.com/uu/api/res/1.2/VAmzs9IyeEdG9udz_w8ysg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/0ffe5f40-f01d-11ed-9cfe-ec5349e218a7.cf.jpg", publishedAt: "2023-05-11T18:02:52Z", content: "Say goodbye to another high-profile Apple Watch app. As MacRumorsnotes, Meta is telling Facebook Messenger users that the Apple Watch version will be unavailable after May 31st. While you'll still ge… [+1600 chars]" }, 

]

export async function getNews(){
  const response = await fetch(Articles);
  const newsData = await response.json();
  return newsData.articles;
}

export async function getSources(){
  const response = await fetch(Sources);
  const sourceData = await response.json();
  return sourceData.sources;
}


