import { MDXRemote } from "next-mdx-remote";
import { Link } from "../../elements/Link/Link";
import { ComponentProps, PropsWithChildren } from "react";
import { Heading } from "../../elements/Heading/Heading";
import Image from "next/image";
import { Post as PostType } from "../../../helpers/loadPost";
import { InlineCode } from "../../elements/InlineCode/InlineCode";
import { CodeBlock } from "../../elements/CodeBlock/CodeBlock";

interface Props {
  source: PostType["source"];
}

export function PostContent({ source }: Props) {
  const components = {
    a: Link,
    h1: ({ children }: PropsWithChildren<{}>) => (
      <Heading variant="h1">{children}</Heading>
    ),
    h2: ({ children }: PropsWithChildren<{}>) => (
      <Heading variant="h2">{children}</Heading>
    ),
    h3: ({ children }: PropsWithChildren<{}>) => (
      <Heading variant="h3">{children}</Heading>
    ),
    h4: ({ children }: PropsWithChildren<{}>) => (
      <Heading variant="h4">{children}</Heading>
    ),
    h5: ({ children }: PropsWithChildren<{}>) => (
      <Heading variant="h5">{children}</Heading>
    ),
    img: (props: ComponentProps<typeof Image>) => (
      <Image {...props} width={800} height={640} unoptimized />
    ),
    inlineCode: InlineCode,
    code: ({
      children,
      className,
    }: {
      children: string;
      className: string;
    }) => (
      <CodeBlock language={className.split("language-")[1]}>
        {children}
      </CodeBlock>
    ),
  };
  return <MDXRemote {...source} components={components} />;
}
