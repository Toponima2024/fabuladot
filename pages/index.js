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

const comohacemos = [
  {
    id: 1,
    title: "Escuchamos.",
  },
  {
    id: 2,
    title: "Ponemos atención a la calle, las tendencias,los clientes.",
  },
  {
    id: 3,
    title: "Investigamos.",
  },
  {
    id: 4,
    title: "Diseñamos ideas, historias, imágenes.",
  },
  {
    id: 5,
    title: "Articulamos redes y construimos democracia cultural.",
  },
  {
    id: 6,
    title: "Organizamos el equipo más eficiente y talentoso",
  },
  {
    id: 7,
    title: "Capturamos recursos.",
  },
  {
    id: 8,
    title: "Implementamos considerando tiempos y recursos.",
  },
  {
    id: 9,
    title: "Evaluamos.",
  },
]

const people = [
  { 
    id: 1,
    image: '/images/team/eugenia.jpg', 
    name:'Eugenia Esté' ,
    bio: [
      'es comunicadora social, diseñadora gráfica y antropóloga; tiene el título de experto en gestión cultural de la Fundación Contemporánea y diplomado en responsabilidad social corporativa de Universidad Simón Bolívar.',
      'Ha asesorado diversas empresas diseñando e implementando proyecto de cultura, ciencia y comunidad.',
      'Disfrutar del arte, cocinar para los amigos y viajar son sus grandes pasiones. Eugenia eventualmente escribe relatos para leer en voz alta.',
    ]
  },
  { 
    id: 2,
    name:'Andreina Mujica' ,
    image: '/images/team/andreina.jpg', 
    bio: [
      'es periodista y fotógrafa. Estudió Letras en la Universidad Central de Venezuela y un Máster en Periodismo de investigación en la UCAB. Tiene el título de experto en gestión cultural de la Fundación Contemporánea.',
      'Trabajó como docente de fotoperiodismo en la UCV y la UCAB y ha sido galardonada por la Agencia de prensa extranjera en París con el premio “La otra mirada” por sus trabajos sobre festivales de cine en Biarritz y Cannes.',
      'Andreina es fundadora y directora del proyecto Somos Caravana. Estudió y trabajó como chef de cocina en París y adora cocinar para amigos y familiares, o compartir una buena copa de vino. Camina las calles de Madrid cazando imágenes de perros de todas las razas y tamaños.',
    ]  },
  { 
    id: 3,
    name:'Patricia Mendosa' ,
    image: '/images/team/patricia.jpg', 
    bio: [
      'es investigadora, gestora cultural y curadora de proyectos expositivos,educativos y editoriales.',
      'Tiene un diploma de estudios avanzados de Arte y Pensamiento de la Universitat de Barcelona y el diploma de experto en gestión culutral de la Fundación Contemporánea.',
      'Fue directora de la Sala Mendoza en Caracas desde el 2010 hasta el año 2022; y profesora de psicología del arte en la Escuela de Arte de la UCV hasta el 2018.',
      'Patricia es una lectora voraz, viajera incansable y militante de los quesos y el vino.'
    ]  },
  { 
    id: 4,
    name:'Felipe Vargas' ,
    image: '/images/team/felipe.jpg', 
    bio: [
      'es ingeniero informático y desarrollador de software.Asesora empresas globales en Canadá, Gran Bretaña y Ecuador.',
      'En su tiempo libre devora reportes sobre inteligencia artificial y ensayos de machine learning.',
      'Felipe adora los tejidos artesanales y siente profunda admiración por los productos agrícolas de pequeñas granjas. Quizás porque nació y creció entre cañaverales en su querida y añorada Venezuela.',
    ]  },
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
        <div
      className="relative w-full xl:h-screen h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/header_fabuladot_desk.jpg')",
        backgroundSize: "cover",
      }}
    >

    </div>
    <section className="section relative bg-primary h-[40vh] mb-[20vh]">
    <div className="absolute top-0 inset-x-0 bg-[#2A2D7D] bg-opacity-1 flex items-center justify-center w-3/4 mx-auto max-h-[25vh] -translate-y-1/2 rounded-[18px] ">
        <div className="text-white pt-5 pb-5">
          <p className="text-lg sm:text-sm mb-6">
          <span className="font-bold block">Promover, divulgar y gestionar</span> 
          <span className="font-bold block">la cultura.</span> 
          <span className="font-bold block">Eso es lo que sabemos hacer</span> 
          <span className="font-bold block">y lo hacemos muy bien.</span> 
          </p>
          <div className="flex justify-center w-full">
            <button className="px-3 py-1 bg-white hover:bg-gray-100 text-[#2A2D7D] font-medium rounded-lg transition">
              Hablemos
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-[#7ED956] bg-opacity-1 flex items-center justify-center w-4/5 mx-auto translate-y-1/2 rounded-[18px]">        
  <div className="text-center text-white px-4">
    <h6 className="text-2xl   font-bold text-white mt-2 mb-4">¿Cómo lo hacemos?</h6>
    <div className="text-left">
      <ul className="list-disc list-inside flex flex-col  items-start">
        {
          comohacemos.map((item) => (
            <li key={item.id} className="text-sm sm:text-xs mb-2" style={{ paddingLeft: '1em', textIndent: '-1em', overflowWrap: 'break-word' }}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  </div>
</div>
    </section>
{/* <section className="section banner w-full h-screen relative"> */}
{/* Contenido de la sección */}
  {/* <img src="/images/header_fabuladot_desk.jpg" className="w-full h-full max-w-full max-h-full object-cover  absolute top-0 left-0" />
</section> */}
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
      {/* <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8"> */}
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
            {/* </div> */}
            {/* sidebar */}
            {/* <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            /> */}
          {/* </div>
        </div>
      </section> */}
      <section className="section">
        <div className="container mx-auto px-4 "  style={{backgroundColor: "#f7f7f7"}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {people.map((person) => (
          // <PersonCard key={index} image={person.image} bio={person.bio} />
          <div key={person.id} className="bg-transparent overflow-hidden">
            <img src={person.image} alt="Person" className="w-full  object-cover" />
            <div className="p-4">
              {person.bio.map((bio, index) => {
                if(index === 0) {
                  return (
                    <p key={index} className="text-gray-700" style={{fontFamily:'Libre Baskerville', color:'#2a2d7d', fontSize:'10px'}}>
                      <span className="font-bold">{person.name}</span> {bio}
                    </p>
                  )
                }else{
                  return (
                    <p key={index} className="text-gray-700" style={{fontFamily:'Libre Baskerville', color:'#2a2d7d', fontSize:'10px'}}>
                      {bio}
                    </p>)
                }
              }
              
              )

              }
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
