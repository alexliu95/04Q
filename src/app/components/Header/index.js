import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky w-full flex gap-4 justify-between items-center top-0 h-16 shadow-md dark:shadow-[rgba(255,255,255,.15)] backdrop-blur dark:bg-transparent transition-all py-3 px-4 md:px-12 lg:px-20 z-50">
      <div className="flex gap-3 justify-between items-center grow-0 shrink-0">
        <div>
          <Link href="/"><h1 className="font-black text-xl">{process.env.SITE_TITLE}</h1></Link>
          <h3 className="text-xs text-mode mt-1">{process.env.SITE_DESCRIPTION}</h3>
        </div>
      </div>
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 max-md:hidden">
        <div className="flex gap-3">
          {/* <div>导航页</div>
          <div>热点阅读</div>
          <div>那什么页</div> */}
        </div>
      </div>
      <div className="flex justify-between items-center grow-0 shrink-0">
          <a
            href={`https://github.com/${process.env.GITHUB_USERNAME}/${process.env.PROJECT_NAME}`}
            target="_blank"
            className="btn-icon flex items-center gap-2"
          >
            <Image src="/images/github.png" alt="GitHub" width="25" height="25" />
            <div>alexliu95/04q导航</div>
          </a>
      </div>
    </div>
  );
}
