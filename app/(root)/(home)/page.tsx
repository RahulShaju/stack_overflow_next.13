import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResults from "@/components/shared/NoResults";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "javascript" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 1000,
    views: 2600000,
    answers: [], // You can add actual answer data as needed
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "javascript" },
    ],
    author: {
      _id: "author2",
      name: "Alice Smith",
      picture: "alice-smith.jpg",
    },
    upvotes: 15,
    views: 25,
    answers: [],
    createdAt: new Date("2021-09-05T14:30:00.000Z"),
  },
  {
    _id: "3",
    title: "What is the benefit of TurboPack?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "javascript" },
    ],
    author: {
      _id: "author3",
      name: "Bob Johnson",
      picture: "bob-johnson.jpg",
    },
    upvotes: 8,
    views: 18,
    answers: [],
    createdAt: new Date("2021-09-10T09:15:00.000Z"),
  },
  {
    _id: "4",
    title: "Async/Await Function Not Handling Errors Properly",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "javascript" },
    ],
    author: {
      _id: "author4",
      name: "Ella Wilson",
      picture: "ella-wilson.jpg",
    },
    upvotes: 12,
    views: 22,
    answers: [],
    createdAt: new Date("2021-09-20T16:45:00.000Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] "
          containerClasses=" md:hidden max:md-flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6 ">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              upvotes={question.upvotes}
              createdAt={question.createdAt}
              views={question.views}
              title={question.title}
              tags={question.tags}
              author={question.author}
              answers={question.answers}
            />
          ))
        ) : (
          <NoResults
            title="There are no Questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
