import { sanityClient } from "../../config/client";


export default async function createComment(req, res) {
     console.log("🚀 ~ file: comment.jsx:5 ~ createComment ~ req:", req)
     const { _id, name, email, comment } = JSON.parse(req.body);
   
     try {
       await sanityClient.create({
         _type: 'comment', 
         blog: {   // use schema name 
           _type : "reference",
           _ref: _id,
         },
         name,
         email,
         comment,
       });
     } catch (err) {
       console.error(err)
       return res.status(500).json({message: `Couldn't submit comment`, err})
     }
     console.log("comment submitted")
     res.status(201).json({message: 'comment created'})
     // return res.status(200).json({ message: 'Comment submitted' })
   }