import React from "react";
import Link from "next/link";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";

interface props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
}
const RenderTag = ({ _id, name, totalQuestions, showCount }: props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Button className=" subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Button>
      {showCount && (
        <p className="small-medium text-dark500_light700 text-white">
          {totalQuestions}
        </p>
      )}
    </Link>
  );
};

export default RenderTag;
