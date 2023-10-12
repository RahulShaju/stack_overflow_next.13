"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  connectToDatabase();
  // eslint-disable-next-line no-empty
  try {
    const { title, content, tags, author, path } = params;

    // create questinon

    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];

    // create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // create an interaction with the record for the users ask question action
    // increment authors reputation by +% points by creating a question
  } catch (error) {}
}
