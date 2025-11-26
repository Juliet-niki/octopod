// app/blog/page.tsx
import Image from "next/image";
import { blogStories } from "@/constants/data";

// How to convert this page and other pages to WordPress?
export default function Blog() {
  return (
    <div className="flex flex-col bg-[#F5F8FA]">
      {/* Hero */}
      <section className="flex flex-col px-7.5 bg-[#E8E8EA] py-27.5">
        <div className="flex flex-col gap-2.5 items-center text-center">
          <h1 className="font-semibold md:font-medium text-[28px] sm:text-[38px] md:text-[50px] lg:text-[60px] leading-9.5 sm:leading-16 lg:leading-17.5 tracking-normal text-[#222222]">
            Octopod Blog
          </h1>

          <p className="font-normal text-xs sm:text-sm lg:text-base leading-4 sm:leading-5 md:leading-6.5  text-[#333333] w-[70%] sm:max-w-[80%] lg:max-w-[70%]">
            Stay updated with expert advice, industry trends, and product
            knowledge from Octopod Services to keep your business and vehicles
            running at their best.
          </p>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-4">
        <div className="flex flex-col gap-3.5 px-7.5">
          <div className="flex flex-col gap-4 md:flex-row md:w-full md:justify-between md:items-center">
            <div className="flex flex-col md:w-1/3 lg:w-1/2">
              <h2 className="font-semibold md:font-medium text-[28px] sm:text-[32px] md:text-[42px] lg:text-[55px] leading-9 md:leading-14 lg:leading-16.5 tracking-normal text-[#222222]">
                All Stories
              </h2>

              <p className="font-normal text-xs md:text-sm text-[#333333AA]">
                Everything you need to know, about everything we do.
              </p>
            </div>

            <div className="flex flex-row gap-3 md:w-2/5 lg:w-1/3">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Blog..."
                className="w-full border border-[#9B9BA4] outline-none rounded-sm py-3 px-4 placeholder:font-normal placeholder:text-xs placeholder:text-[#6C6D79] font-normal text-xs text-[#6C6D79]"
              />

              <button
                type="submit"
                className="rounded-sm py-3 px-4 bg-[#F12328] font-bold text-xs text-[#FFFFFE] cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5 mt-4">
            {/* m-post-card-grid */}

            {blogStories.map((story, index) => (
              <article
                key={index}
                className="bg-white rounded-lg border border-[#E8E8EA] p-4 gap-4"
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={378}
                  height={252}
                  className="w-full object-cover h-56 rounded-lg"
                />

                <div className="flex flex-col gap-4 p-[6.5px]">
                  <div className="flex flex-col gap-3">
                    <div className="rounded-sm py-1 px-2 bg-[#F123280D] w-max font-medium text-xs text-[#F12328]">
                      {story.category}
                    </div>

                    <h3 className="font-semibold text-[17.5px] text-[#181A2A]">
                      {story.title}
                    </h3>
                  </div>

                  <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2.5 items-center">
                      <Image
                        src={story.authorProfilePic}
                        alt="author profile picture"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full"
                      />

                      <p className="font-medium text-sm text-[#97989F]">
                        {story.authorName}
                      </p>
                    </div>

                    <p className="font-normal text-xs text-[#97989F]">
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
