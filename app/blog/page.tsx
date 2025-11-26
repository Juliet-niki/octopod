// app/blog/page.tsx
import Image from "next/image";
import { blogStories } from "@/constants/data";

// How to convert this page and other pages to WordPress?
export default function Blog() {
  return (
    <div className="flex flex-col bg-[#F5F8FA]">
      {/* Hero */}
      <section className="flex flex-col px-5 sm:px-8 lg:px-16 xl:px-20 bg-[#E8E8EA] py-16 md:py-18 lg:py-20">
        <div className="flex flex-col gap-3 lg:gap-4 items-center text-center">
          <h1 className="font-semibold ml:font-medium text-[28px] sm:text-[38px] ml:text-[50px] lg:text-[60px] leading-tight ml:leading-snug lg:leading-tight tracking-normal text-[#222222]">
            Octopod Blog
          </h1>

          <p className="font-normal text-xs sm:text-sm lg:text-base leading-relaxed text-[#333333] w-full sm:max-w-[80%] lg:max-w-[70%]">
            Stay updated with expert advice, industry trends, and product
            knowledge from Octopod Services to keep your business and vehicles
            running at their best.
          </p>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-6 lg:gap-8 px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-4 ml:flex-row ml:w-full ml:justify-between ml:items-center">
            <div className="flex flex-col ml:w-1/3 lg:w-1/2">
              <h2 className="font-semibold ml:font-medium text-[28px] sm:text-[32px] ml:text-[42px] lg:text-[50px] leading-tight ml:leading-snug lg:leading-tight tracking-normal text-[#222222]">
                All Stories
              </h2>

              <p className="font-normal text-sm ml:text-base text-[#333333AA]">
                Everything you need to know, about everything we do.
              </p>
            </div>

            <div className="flex flex-row gap-3 ml:w-2/5 lg:w-1/3">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Blog..."
                className="w-full border border-[#9B9BA4] outline-none focus:border-[#F12328] focus:ring-1 focus:ring-[#F12328] rounded-lg py-3 px-4 placeholder:font-normal placeholder:text-sm placeholder:text-[#6C6D79] font-normal text-sm text-[#222222] transition-colors"
              />

              <button
                type="submit"
                className="rounded-lg py-3 px-5 bg-[#F12328] hover:bg-[#d11f24] font-semibold text-sm text-white cursor-pointer transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {blogStories.map((story, index) => (
              <article
                key={index}
                className="flex flex-col bg-white rounded-lg border border-[#E8E8EA] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer p-4"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={378}
                    height={252}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-4 lg:pt-5">
                  <div className="flex flex-col gap-3">
                    <span className="rounded-md py-1.5 px-2.5 bg-[#F123280D] w-max font-medium text-xs text-[#F12328]">
                      {story.category}
                    </span>

                    <h3 className="font-semibold text-lg lg:text-xl text-[#181A2A] line-clamp-2">
                      {story.title}
                    </h3>
                  </div>

                  <div className="flex flex-row gap-3 items-center text-sm">
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src={story.authorProfilePic}
                        alt="author profile picture"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full object-cover"
                      />

                      <p className="font-medium text-[#97989F]">
                        {story.authorName}
                      </p>
                    </div>

                    <span className="text-[#97989F]">•</span>

                    <p className="font-normal text-[#97989F]">
                      {story.datePublished}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
