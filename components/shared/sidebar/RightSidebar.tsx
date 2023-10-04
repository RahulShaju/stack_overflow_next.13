import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <section className=" custom-scrollbar background-light900_dark200 light-border sticky right-0  top-0 flex h-screen w-[350px] flex-col  gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {" "}
              can i get the course for free ?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="Chevron-right-icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="Chevron-right-icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {" "}
              can i get the course for free ?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="Chevron-right-icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {" "}
              can i get the course for free ?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="Chevron-right-icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              {" "}
              can i get the course for free ?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="Chevron-right-icon"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        </div>
        <div></div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjs
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjs
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjs
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjs
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjs
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
          <Link href="/" className="flex justify-between gap-2">
            <Button className="background-light800_dark300 text-light400_light500">
              nextjsadfafa
            </Button>
            <p className="small-medium text-dark500_light700 text-white">6</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
