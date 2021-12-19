import { Post } from "./loadPost";
import { exampleBlogPost } from "../fixtures/exampleBlogPost";
import { createRSSFeed } from "./createRSSFeed";

describe("createRSSFeed", () => {
  it("creates a feed based on the input post", () => {
    const publishedAt = new Date(2021, 1, 13, 10, 33).toISOString();
    const post: Post = {
      draft: false,
      excerpt:
        "So you are in interviews as an engineer with an SaaS-startup and want to impress them with your deep knowledge of their tech stack? Here are some tricks I have used in the past to know more about their technology than the interviewer themself.",
      publishedAt: publishedAt,
      slug: "how-to-read-any-startups-source-code",
      source: exampleBlogPost,
      tags: ["Marketing", "Competitive Analysis"],
      title: "How to read any startup's source code",
      updatedAt: publishedAt,
    };
    expect(createRSSFeed([post])).toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><rss xmlns:dc=\\"http://purl.org/dc/elements/1.1/\\" xmlns:content=\\"https://purl.org/rss/1.0/modules/content/\\" xmlns:atom=\\"http://www.w3.org/2005/Atom\\" version=\\"2.0\\" xmlns:media=\\"https://search.yahoo.com/mrss/\\"><channel><title><![CDATA[The Startup CTO]]></title><description><![CDATA[Building companies with web technology]]></description><link>https://startup-cto.net/</link><image><url>https://startup-cto.net/rss-icon.png</url><title>The Startup CTO</title><link>https://startup-cto.net/</link></image><generator>RSS for Node</generator><lastBuildDate>Sun, 19 Dec 2021 18:36:18 GMT</lastBuildDate><atom:link href=\\"https://startup-cto.net/rss/\\" rel=\\"self\\" type=\\"application/rss+xml\\"/><ttl>60</ttl><item><title><![CDATA[How to read any startup's source code]]></title><description><![CDATA[So you are in interviews as an engineer with an SaaS-startup and want to impress them with your deep knowledge of their tech stack? Here are some tricks I have used in the past to know more about their technology than the interviewer themself.]]></description><link>https://startup-cto.net/how-to-read-any-startups-source-code/</link><guid isPermaLink=\\"true\\">https://startup-cto.net/how-to-read-any-startups-source-code/</guid><category><![CDATA[Marketing]]></category><category><![CDATA[Competitive Analysis]]></category><dc:creator><![CDATA[Daniel Bartholomae]]></dc:creator><pubDate>Sat, 13 Feb 2021 09:33:00 GMT</pubDate></item></channel></rss>"`
    );
  });
});
