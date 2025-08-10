import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href = "#",
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const formattedLink = link
    ?.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <Card className="flex flex-col h-full overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg">
      <Link href={href} className={cn("block cursor-pointer", className)}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full max-h-56 object-cover object-top"
          />
        )}

        {image && (
          <div className="relative aspect-[1600/747] w-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="text-xs font-sans">{dates}</time>

          {formattedLink && (
            <div className="hidden text-xs font-sans underline print:visible">
              {formattedLink}
            </div>
          )}

          <Markdown className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert font-sans">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {Array.isArray(links) && links.length > 0 && (
          <div className="flex flex-wrap items-start gap-1">
            {links.map(({ href, icon, type }, idx) => (
              <Link
                href={href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {icon}
                  {type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
