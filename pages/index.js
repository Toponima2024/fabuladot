import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;

const people = [
  { image: '/images/team/eugenia.jpg', bio: 'Are Developer and recently started your own business Already made website to ensure presence wants to develop.' },
  { image: '/images/team/andreina.jpg', bio: 'Are Developer and recently started your own business Already made website to ensure presence wants to develop.' },
  { image: '/images/team/patricia.jpg', bio: 'Are Developer and recently started your own business Already made website to ensure presence wants to develop.' },
  { image: '/images/team/felipe.jpg', bio: 'Are Developer and recently started your own business Already made website to ensure presence wants to develop.' },
  // Agrega más personas aquí
];

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;

  return (
    <Base>
<section className="section banner w-full h-screen relative" style={{border: "1px solid blue"}}>
{/* Contenido de la sección */}
  <img src="/images/header_fabuladot_desk.jpg" className="w-full h-full max-w-full max-h-full object-cover  absolute top-0 left-0" />
</section>
{/* <section className="section" style={{border: "1px solid red", display: "flex", justifyContent: "center"}}>
<div className=" relative top-0 transform -translate-y-1/2" 
style={{backgroundColor: "#2a2d7d", border: "1px solid black", width:'50%', display: "flex", justifyContent: "center"}}>
    <div  style={{border: "1px solid green", display: "flex", justifyContent: "center"}}>
      <div className="col-6 z-10">
        <div className="banner-title">
          <p style={{fontFamily:'Baskervville', color:'white', fontSize:'30px', lineHeight:'2.267'}}>Promover,divulgar y gestionar la cultura.</p>
          <span>Subtitulo del banner</span>
        </div>
        <p style={{fontFamily:'Lato', color:'white', fontSize:'30px', lineHeight:'2.267'}}>Contenido del banner</p>
        <a href="#" className="btn btn-primary">Botón del banner</a>
      </div>
    </div>
  </div>
</section> */}
      {/* Banner */}
      {/* <section className="section banner relative pb-0"> */}
        {/* <ImageFallback
          className="absolute top-0 left-0 z-[-1] w-full"
          src={"/images/header_fabuladot_desk.jpg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        /> */}
        {/* <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                  <Link
                    className="btn btn-primary mt-6"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    {banner.button.label}
                  </Link>
              )}
            </div>
            {banner.image_enable && (
                <div className="col-9 lg:col-6">
                  <ImageFallback
                    className="mx-auto object-contain"
                    src={banner.image}
                    width={548}
                    height={443}
                    priority={true}
                    alt="Banner Image"
                  />
                </div>
            )}
          </div>
        </div> */}
      {/* </section> */}

      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8">
              {/* Featured posts */}
              {/* {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${
                                i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                              }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Promotion */}
              {/* {promotion.enable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )} */}

              {/* Recent Posts */}
              {/* {recent_posts.enable && (
                <div className="section pt-0">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mb-8 md:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}

              {/* <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              /> */}
            </div>
            {/* sidebar */}
            {/* <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            /> */}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto px-4 "  style={{backgroundColor: "#f7f7f7"}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {people.map((person, index) => (
          // <PersonCard key={index} image={person.image} bio={person.bio} />
          <div key={index} className="bg-transparent overflow-hidden">
            <img src={person.image} alt="Person" className="w-full sm:h-20 object-cover" />
            <div className="p-4">
              <p className="text-gray-700" style={{fontFamily:'Libre Baskerville', color:'#2a2d7d', fontSize:'10px'}}>{person.bio}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
