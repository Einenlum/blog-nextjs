import fs from "fs";
import { Feed } from "feed"
import { ArticleInterface } from "./articleRepository";

export const generateRssFeed = async (articles: ArticleInterface[]) => {
    const siteURL = 'https://einenlum.com';
    const date = new Date();
  
    const author = {
  
      name: "Yann Rabiller",
  
      email: "yann.rabiller@gmail.com",
  
      link: "https://twitter.com/Einenlum",
  
    };
  
    const feed = new Feed({
  
      title: "Einenlum",
  
      description: "Personal website and blog",
  
      id: siteURL,
  
      link: siteURL,
    
      favicon: `${siteURL}/favicon.png`,
  
      copyright: `All rights reserved ${date.getFullYear()}, Yann Rabiller`,
  
      updated: date,
  
      generator: "Feed for Node.js",
  
      feedLinks: {
  
        rss2: `${siteURL}/rss/feed.xml`,
  
        json: `${siteURL}/rss/feed.json`,
  
        atom: `${siteURL}/rss/atom.xml`,
  
      },
  
      author,
  
    });
  
    articles.forEach((article) => {
  
      const url = `${siteURL}/${article.link}`;
  
      feed.addItem({
  
        title: article.articleTitle,
  
        id: url,
  
        link: url,
  
        description: article.description,
    
        author: [author],
  
        contributor: [author],
  
        date: new Date(article.publishedAt),
  
      });
  
    });

    return feed;
  
  };


export const writeFeed = (feed: Feed) => {
    const rootDir = process.cwd();

    fs.mkdirSync(`${rootDir}/public/rss`, { recursive: true });
    fs.writeFileSync(`${rootDir}/public/rss/feed.xml`, feed.rss2());
    fs.writeFileSync(`${rootDir}/public/rss/atom.xml`, feed.atom1());
    fs.writeFileSync(`${rootDir}/public/rss/feed.json`, feed.json1());
}
