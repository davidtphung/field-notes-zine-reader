"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Menu, Search } from "lucide-react";
import { Wordmark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { journal } from "@/lib/journal";
import { cn } from "@/lib/utils";

const primary = [
  { href: "/", label: "Journal" },
  { href: "/zine", label: "Zine" },
  { href: "/archive", label: "Archive" },
];

const more = [
  { href: "/authors", label: "Authors" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("nav-link", active && "is-active")}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const { count } = useBookmarks();

  return (
    <header className="site-header">
      <div className="folio-bar">
        <p>
          <span className="num">{journal.issue.volume}</span> / {journal.issue.title}
        </p>
        <p className="hidden sm:block">{journal.issue.season}</p>
        <p>
          Issue <span className="num">{journal.issue.code}</span>
        </p>
      </div>
      <div className="site-header-main">
        <Link href="/" className="logo-link" aria-label="Field Notes home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primary.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          {more.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="font-ui h-8 px-2.5 lg:hidden"
          >
            <Link href="/archive">Archive</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden h-8 px-2.5 lg:inline-flex"
          >
            <Link href="/archive">
              <Search className="size-3.5" aria-hidden="true" />
              Search
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/archive?saved=1" aria-label={`Saved stories, ${count} saved`}>
              <Bookmark className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Saved</span>
              <span className="tabular-nums">{count}</span>
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                aria-label="Open journal index"
              >
                <Menu className="size-4" aria-hidden="true" />
                Index
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper w-[min(100%,22rem)]">
              <SheetHeader>
                <SheetTitle className="font-display text-left">
                  Journal index
                </SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 px-4 pb-8" aria-label="Mobile">
                <div>
                  <p className="kicker mb-3">Read</p>
                  <div className="grid gap-2">
                    <SheetClose asChild>
                      <Link className="mobile-link" href="/">
                        Lead story
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link className="mobile-link" href="/zine">
                        Open the zine
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link className="mobile-link" href="/archive">
                        All stories
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link className="mobile-link" href="/archive?saved=1">
                        Saved ({count})
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                <div>
                  <p className="kicker mb-3">Find</p>
                  <div className="grid gap-2">
                    {more.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link className="mobile-link" href={item.href}>
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <SheetClose asChild>
                  <Link className="btn-kelp inline-flex justify-center" href="/archive">
                    Search the archive
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
