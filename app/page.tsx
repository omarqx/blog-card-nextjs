import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  title: string;
  description: string;
  link: string;
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5 relative" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow-right-line">
        <path id="Vector"
          d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
          fill="#4338CA" />
      </g>
    </svg>
  )
}


const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, imageAlt, badges, title, description, link }) => {
  return (
    <article className="w-[340px] h-[504px] bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
      {/* Image */}
      <figure>
        <Image
          src={"/images" + imageSrc}
          alt={imageAlt}
          className="h-72 relative rounded-t-lg"
          width={340}
          height={288}
        />
      </figure>

      <div className="h-[216px] px-4 py-6 flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
          <div className="px-2 py-0.5 bg-green-50 rounded-full border border-green-200 justify-start items-center inline-flex">
            {badges.map((badge, index) => (
              <div key={index} className="text-center text-green-700 text-sm font-normal leading-tight">
                {badge}
              </div>
            ))}
          </div>

          <div className="self-stretch text-neutral-900 text-lg font-semibold leading-7">{title}</div>
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-neutral-600 text-base font-medium leading-normal">{description}</div>
          <a className="rounded justify-center items-center gap-1.5 inline-flex" href={link}>
            <div className="px-0.5 justify-center items-center flex">
              <div className="text-indigo-700 text-base font-medium leading-normal">Read more</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article >
  );
};


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 px-4 md:px-8 lg:px-8 h-screen py-[200px]">
        <div className='md:col-start-2 lg:col-start-5 col-span-4 '>
          <BlogCard
            imageSrc="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
            imageAlt="Top 5 Living Room Inspirations"
            badges={["Interior"]}
            title="Top 5 Living Room Inspirations"
            description="Curated vibrants colors for your living, make it pop & calm in the same time.."
            link="/posts/ai-future"
          />
        </div>
      </section>
    </main>
  );
}
