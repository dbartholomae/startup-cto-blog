import Link from "next/link";
import styles from "./PostSummary.module.css";
import { PostSummaryType } from "../../../model/PostSummaryType";

interface Props {
  post: PostSummaryType;
}

export function PostSummary({
  post: { excerpt, publishedAt, slug, tags, title },
}: Props) {
  return (
    <Link href={slug}>
      <article className={styles.container}>
        {publishedAt && (
          <time className={styles.publishDate} dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString("en-ca")}
          </time>
        )}
        {tags && <span className={styles.tags}>{tags.join(", ")}</span>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={slug} passHref>
          <a className={styles.link}>
            Read the article
            <span className={styles.visuallyHidden}> {title}</span>
          </a>
        </Link>
      </article>
    </Link>
  );
}