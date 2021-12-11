import React from "react";

import { ComponentStory } from "@storybook/react";
import { exampleBlogPost } from "../components/exampleBlogPost";
import { Home } from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      title: "Blog title",
      publishedAt: "2020-01-01",
      excerpt: "Blog excerpt",
      slug: "blog-slug",
      source: exampleBlogPost,
      tags: [],
    },
  ],
};
