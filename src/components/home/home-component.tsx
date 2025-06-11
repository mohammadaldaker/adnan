"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CarouselPlugin } from "./carosel";

function Home() {
    
    
  return (
    <>
      <Card className=" flex overflow-hidden border-3 border-border mt-6 scroll-mt-32">
        <CardHeader className="flex flex-col items-center p-6 m-2 ">
          <CardTitle>Adnan Taha </CardTitle>
          <Image
            className="rounded-full object-cover "
            width="200"
            height="200"
            src="/photos/adnan-profile-photo.jpeg.jpg"
            alt="adnan profile photo"
          />
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex w-[calc(100vw-)] gap-9">
            <CarouselPlugin />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default Home;
