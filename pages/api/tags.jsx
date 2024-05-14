// import { sanityClient } from "../../config/client";

import { createClient } from "next-sanity"

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = process.env.SANITY_API_VERSION
const useCdn = process.env.SANITY_USE_CDN
const token = process.env.SANITY_TOKEN

const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token
}
const sanityClient = createClient(config);


const query = `*[_type == "tags"]{
    title,
    slug,
    image{
     asset->{
          url
        }
    },
    excerpt
}`

export default async function handler(req, res) {
  const tags = await sanityClient.fetch(query);
   res.status(200).json({ data: tags })
}


