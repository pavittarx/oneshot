import { Cursor } from "mongodb";
import { mongo, db } from "~/db";
import { COLLEGES_COLLECTION_VAR } from "~/utils/constants";

async function getCollegesCollection() {
  const dbInstance = await db;
  return dbInstance.collection(COLLEGES_COLLECTION_VAR);
}

export async function getCollegeById(id: string) {
  const query = {
    _id: new mongo.ObjectID(id),
  };

  const colleges = await getCollegesCollection();
  const college = await colleges.findOne(query);

  return college;
}

export async function getCollegesByName(name: string) {
  const query = {
    name: {
      $regex: new RegExp(name, "i"),
    },
  };

  const colleges = await getCollegesCollection();
  const cursor = await colleges.find(query);

  const docs: Array<unknown> = [];

  for await (const doc of cursor) {
    docs.push(doc);
  }

  return docs;
}

export async function getCollegesList() {
  const colleges = await getCollegesCollection();
  const cursor = await colleges.find({});

  const docs: Array<unknown> = [];
  for await (const doc of cursor) {
    docs.push(doc);
  }

  return docs;
}

export async function getSimilarColleges(id: string) {
  const college = await getCollegeById(id);

  const query = {
    $or: [
      {
        city: college.city,
      },

      {
        no_of_students: {
          $lt: college.no_of_students + 100,
          $gt: college.no_of_students - 100,
        },
      },
      {
        courses: {
          $in: college.courses,
        },
      },
    ],
  };

  const collegesCollection = await getCollegesCollection();
  const cursor = collegesCollection.find(query);

  const docs: Array<unknown> = [];
  for await (const doc of cursor) {
    docs.push(doc);
  }
  return docs;
}
