"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY_BASE = 0.04;

function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);

    if (images.length === 0) {
      hideLoader();
      return;
    }

    Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) return resolve();
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          })
      )
    ).then(hideLoader);

    function hideLoader() {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-40 h-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-white animate-loading-bar" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <LoadingOverlay />
      <main className="flex flex-col min-h-[100dvh] space-y-12">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col flex-1 space-y-2">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY_BASE}
                  className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-5xl"
                  yOffset={8}
                  text={`I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY_BASE * 2}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY_BASE * 3}>
                <Avatar className="size-28 border -mt-4" aria-label={DATA.name}>
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY_BASE * 4}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">About Me</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY_BASE * 5}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        {/* Work */}
        <section id="work">
          <div className="flex flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY_BASE * 6}>
              <h2 className="text-xl sm:text-2xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY_BASE * (7 + id)}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="flex flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY_BASE * 10}>
              <h2 className="text-xl sm:text-2xl font-bold">
                Education & Certifications
              </h2>
            </BlurFade>
            {DATA.education.map((edu, id) => (
              <BlurFade
                key={edu.school}
                delay={BLUR_FADE_DELAY_BASE * (11 + id)}
              >
                <ResumeCard
                  href={edu.href}
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={`${edu.start} - ${edu.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="flex flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY_BASE * 14}>
              <h2 className="text-xl sm:text-2xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY_BASE * (15 + id)}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <BlurFade delay={BLUR_FADE_DELAY_BASE * 18}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from SPA websites to
                complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY_BASE * (19 + id)}
              >
                <ProjectCard {...project} />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BlurFade delay={BLUR_FADE_DELAY_BASE * 24}>
              <div className="space-y-4">
                <span className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                  Contact
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
                  Want to chat?{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors"
                  >
                    Send me a message on X
                  </Link>{" "}
                  or{" "}
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-black dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors"
                  >
                    email me
                  </Link>
                  .
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
