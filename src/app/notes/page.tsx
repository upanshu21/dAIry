import { Metadata } from "next";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db/prisma";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "dAIry",
};

export default async function NotesPage() {
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });
  console.log(allNotes)

  return (
    <div className="grid gap-3 sm:grid-cols-5 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">
          {"Let's get you started !"}
        </div>
      )}
    </div>
  );
}
