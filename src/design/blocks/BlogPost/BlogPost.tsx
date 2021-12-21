import { Post as PostType } from "../../../helpers/loadPost";
import { MDXRemote } from "next-mdx-remote";
import styles from "./BlogPost.module.css";
import "prismjs/themes/prism-tomorrow.css";
import Script from "next/script";
import Image from "next/image";
import { ComponentProps } from "react";

export function BlogPost({
  post: { publishedAt, source, tags, title },
}: {
  post: Pick<PostType, "publishedAt" | "source" | "tags" | "title">;
}) {
  const components = {
    img: (props: ComponentProps<typeof Image>) => (
      <Image {...props} width={800} height={640} unoptimized />
    ),
  };
  return (
    <main className={styles.container}>
      {publishedAt && (
        <time dateTime={publishedAt} className={styles.publishDate}>
          {new Date(publishedAt).toLocaleDateString()}
        </time>
      )}
      {tags && <span className={styles.tags}>{tags.join(", ")}</span>}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <MDXRemote {...source} components={components} />
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js"
        async
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"
        async
      />
      <Script
        async
        id="start-prism"
      >{`setTimeout(function(){Prism.highlightAll();},100)`}</Script>
    </main>
  );
}