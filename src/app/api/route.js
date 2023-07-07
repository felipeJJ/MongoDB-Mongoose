import connectMongo from "@/libs/mongoose"
import Topic from "@/models/schema"
import { NextResponse } from "next/server"

export async function POST(req, res) {
  const {title, description} = await req.json()
  await connectMongo()
  await Topic.create({title, description})
  return NextResponse.json({message: "criado "}, {status: 200})
}

export async function GET(req, res) {
  await connectMongo()
  const topics = await Topic.find() 
  return NextResponse.json({topics})  
}

export async function DELETE(req, res) {
  const id = req.nextUrl.searchParams.get("id")
  await connectMongo()
  await Topic.findByIdAndDelete(id) 
  return NextResponse.json({message: "deletado"}, {status: 200})
}
