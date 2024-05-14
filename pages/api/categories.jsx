import { gql } from "@apollo/client";
import {clientAppolo} from '../../config/appoloClient'

const CATEGORIES = gql`
query Assets {
  categories {
    slug
    name
    image {
      url
    }
  }
}
`;

export default async function handler(req, res) {
  const response = await clientAppolo.query({
    query: CATEGORIES,
  });
   res.status(200).json({ data: response?.data?.categories })
}


