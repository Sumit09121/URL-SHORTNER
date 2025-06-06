
import clientPromise from "@/lib/mongodb" 
 


export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db =client.db("zipylinks")
    const collection =db.collection("url")

    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
        return Response.json({ sucess  : false,error : true, message: 'URL Already Exists !!!' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

  return Response.json({ sucess  : true,error : false, message: 'URL Generated Sucessfully' })
}