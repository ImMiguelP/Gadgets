import { navPages } from "@/components/NavObjs";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { MdWidgets } from "react-icons/md";

export default function Example() {
  return (
    <div className="bg-secondary text-white h-[100dvh] lg:h-0 ">
      <main className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-8">
        <div className="flex text-center justify-center text-primary/80">
          <MdWidgets size="52px" />
        </div>
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            This page does not exist
          </h1>
          <p className="mt-4 text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <ul
            role="list"
            className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
          >
            {navPages.slice(0, navPages.length - 1).map((link, linkIdx) => (
              <div
                key={linkIdx}
                className="group relative flex gap-x-6 py-6 text-secondary-foreground/60 hover:text-primary"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center text-primary/60 group-hover:text-primary ">
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 ">
                    <a href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 ">{link.description}</p>
                </div>
                <div className="flex-none self-center ">
                  <ChevronRightIcon
                    className="h-5 w-5 text-primary/40 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-primary hover:underline"
            >
              <span aria-hidden="true" className="pr-2">
                &larr;
              </span>
              Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
