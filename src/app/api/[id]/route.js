import connectMongo from "../../../libs/mongoose"
import Topic from "../../../models/schema"
import { NextResponse } from "next/server"

export async function PUT(req,{ params }) {
    const { id } = params
    const { newTitle: title, newDescription: description } = await req.json()
    await connectMongo()
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({message: "modificado"}, {status: 200})
}

export async function GET(req,{ params }) {
    const { id } = params
    await connectMongo()
    const topic = await Topic.findOne({_id: id})
    return NextResponse.json({topic}, {status: 200})
}