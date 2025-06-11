"use client";
import { DotArrowRight } from "iconoir-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { useActiveSection } from "@/hooks/use-section";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adnan } from "../../../data";

function CvPageCom() {
  const InfoItem = ({
    label,
    value,
  }: {
    label: string;
    value?: string | React.ReactNode | null;
  }) => (
    <div>
      <div className="text-xs text-text-secondary">{label}</div>
      <div>
        {value || <span className="text-text-secondary italic">No Value</span>}
      </div>
    </div>
  );

  const Section = ({
    title,
    id,
    className,
    children,
  }: {
    title: string;
    id?: string;
    className?: number;
    children: React.ReactNode;
  }) => (
    <Card
      id={id}
      className="relative overflow-visible border-3 border-border mt-6 scroll-mt-32"
    >
      <div className="absolute -top-3 bg-surface px-3 rounded-2xl start-6 text-lg font-bold">
        {title}
      </div>
      <CardContent className="px-6 pb-6 pt-7">
        <div
          className={
            className === 1
              ? "grid md:grid-cols-3 grid-cols-1 gap-9"
              : "grid md:grid-cols-2 grid-cols-1 gap-9"
          }
        >
          {children}
        </div>
      </CardContent>
    </Card>
  );

  //   const sectionIds = [
  //     "about",
  //     "pricing",
  //     "inventory",
  //     "Physical",
  //     "seo",
  //     "allergens",
  //     "compliance",
  //   ];

  //   const activeSection = useActiveSection({ sectionIds });

  //   const scrollToSection = (id: string) => {
  //     const el = document.getElementById(id);

  //     if (el) {
  //       el.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  return (
    <>
      {/* <div>
        <Tabs
          className="bg-surface sticky w-full top-8 z-20 px-2 pt-4"
          value={activeSection}
        >
          <TabsList className="flex gap-6">
            {sectionIds.map((id) => (
              <TabsTrigger
                key={id}
                value={id}
                onClick={() => scrollToSection(id)}
              >
                {id
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div> */}

      {/** about section **/}

      <Section className={1} id="about" title="About me">
        <Image
          width={240}
          height={180}
          className=" ml-8 "
          src={adnan.img}
          alt="Adnan img"
        />
        <InfoItem label="" value={adnan.description} />
        <div>
          <InfoItem label="Name" value={adnan.name} />
          <InfoItem label="Phone" value={adnan.phone} />
          <InfoItem label="E-mail" value={adnan.email} />
          <InfoItem label="Address" value={adnan.address} />
        </div>
      </Section>
      {/* Learning section */}
      <Section id="learning" title="Learning">
        {adnan.courses?.map((course) => {
          return (
            <InfoItem
              key={course.course_id}
              label={course.course_name}
              value={<a href={course.certificate}>Certificate</a>}
            />
          );
        })}
      </Section>

      {/* education */}

      <Section id="education" title="Education">
        {adnan.education?.map((sem) => {
          return (
            <InfoItem
              key={sem.e_id}
              label={sem.degree}
              value={
                <InfoItem
                  label={sem.university}
                  value={
                    sem.year ? (
                      sem.year
                    ) : (
                      <div className="flex">
                        <span className="mx-2 my-1">{sem.year_of_start}</span>
                        <DotArrowRight className="my-1" />
                        <span className="mx-2 my-1">{sem.year_of_end}</span>
                      </div>
                    )
                  }
                />
              }
            />
          );
        })}
      </Section>

      {/* expierinces */}

      <Section id="experience" title="Experience">
        {adnan.experience?.map((exp, ind) => {
          return (
            <div key={ind}>
              <InfoItem label={exp.company} value={exp.position} />
              {exp.start && exp.end && (
                <div className="flex text-text-secondary italic">
                  <span className="mx-2 my-1">{exp.start}</span>
                  <DotArrowRight className="my-1" />
                  <span className="mx-2 my-1">{exp.end}</span>
                </div>
              )}
            </div>
          );
        })}
      </Section>
    </>
  );
}

export default CvPageCom;
