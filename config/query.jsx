import gql from "graphql-tag";



// GQL HYGRAPH 
export const POSTS = gql`
query Assets {
  posts {
    title
    slug
    createdAt
    tags
    excerpt
    coverImage {
      url
    }
    content {
      html
      raw
    }
    categorie {
      slug
      name
    }
    author {
      name
      picture {
        url
      }
    }
  }
}`;


export const POSTS_BY_CATEGORY = gql`
query Assets($slug: String = "") {
  posts(where: {categorie: {slug: $slug}}) {
    title
    slug
    createdAt
    tags
    excerpt
    coverImage {
      url
    }
    content {
      markdown
    }
    categorie {
      slug
      name
      image {
        url
      }
    }
    author {
      name
      picture {
        url
      }
    }
  }
}`;


export const SINGLE_POST = gql`
query Assets($slug: String = "") {
  posts(where: {slug: $slug}) {
    title
    slug
    createdAt
    tags
    excerpt
    avertisements {
      slug
      title
      url
      image {
        url
      }
    }
    seoOverride {
      title
      description
    }
    coverImage {
      url
    }
    content {
      html
      raw
    }
    categorie {
      slug
      name
      image {
        url
      }
    }
    author {
      name
      picture {
        url
      }
    }
  }
}`;