import { sanityClient } from "../../config/client";

const query = `*[_type == "blog"]{
  title,
  slug,
  excerpt,
  poster{
    asset->{
      url
    }
  },
  poster_link,
  content,
  navigation_links[]{
    title,
    link,
  },
  category->{
    title,
    slug,
    image{
      asset->{
        url
      }
    },
    excerpt
  },
  tags[]->{
    title,
    slug,
    image{
      asset->{
        url
      }
    },
    excerpt
  },
  written_by
}`;

export default async function handler(req, res) {
  const blog = await sanityClient.fetch(query);
  console.log(blog);
  res.status(200).json({ data: blog });
}
