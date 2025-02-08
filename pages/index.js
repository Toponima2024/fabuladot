import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import InfoSection from "@layouts/components/InfoSection";
import Pagination from "@layouts/components/Pagination";
import SectionTeam from "@layouts/components/SectionTeam";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa";
const { blog_folder, pagination } = config.settings;



const valores = [
  {
    id:1,
    texto:"Creatividad",
    img:"/images/valores/creatividad.png"
  },
  {
    id:2,
    texto:"Responsabilidad",
    img:"/images/valores/responsable.png"
  },
  {
    id:3,
    texto:"Energía",
    img:"/images/valores/energia.png"
  },
  {
    id:4,
    texto:"Conciencia ambiental",
    img:"/images/valores/nube.png"
  },
]

const people = [
  { 
    id: 1,
    image: '/images/team/eugenia.jpg', 
    name:'Eugenia Esté' ,
    bio: [
      'es comunicadora social, diseñadora gráfica y antropóloga; tiene el título de experto en gestión cultural de la Fundación Contemporánea y diplomado en responsabilidad social corporativa de Universidad Simón Bolívar.',
      'Ha asesorado diversas empresas diseñando e implementando proyectos de cultura, ciencia y comunidad.',
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

  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('header-hidden');
      } else {
        // Scroll up
        header.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Base>
        <div
      className="relative w-full xl:h-[80vh] h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/header_fabuladot_desk.jpg')",
        backgroundSize: "cover",
      }}
    >
          {/* <div className="absolute bottom-0 inset-x-0 bg-[#2A2D7D] bg-opacity-1 flex items-center justify-center w-3/4 xl:w-1/4 mx-auto translate-y-1/2 sm:translate-y-1/3 md:translate-y-1/4 lg:translate-y-1/5 rounded-[18px] pb-2 sm:pb-4 md:pb-6 lg:pb-8 z-10">        
          <div className="text-white">
              <p className="text-lg sm:text-sm mb-6 mt-6">
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  Promover, divulgar y
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  gestionar la cultura.
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  Eso es lo que sabemos
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  hacer y lo hacemos
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  muy bien.
                </span> 
              </p>
              <div className="flex justify-center w-full mb-2">
                <button 
                  className="px-3 bg-white hover:bg-gray-100 text-[#2A2D7D] font-bold rounded-full transition"
                  style={{ fontFamily: "Lato", fontSize: '12px', lineHeight: '2.5' }}
                >
                  Hablemos
                </button>
              </div>
            </div>
          </div> */}
    </div>
      <InfoSection />
  
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
      <SectionTeam >
            <div className="flex flex-col  items-center justify-center mx-auto w-full sm:w-5/6 bg-[#f7f7f7] bg-opacity-1 rounded-[18px] ">

                <h2 
                    className="text-xl font-bold  text-center"
                    style={{fontFamily:"Lato", fontSize:'32px', lineHeight:'1.2', color:'#2a2d7d'}}
                  >
                  Nuestro Equipo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2  p-4">
                  <div>
                    {people.filter((_, index) => index % 2 === 0).map((person) => (
                      <div key={person.id} className="bg-transparent overflow-hidden mb-4">
                        <img src={person.image} alt="Person" className="2xl:w-3/4 w-auto object-cover mx-auto block p-3" />
                        <div className="2xl:w-2/3 sm:w-auto mx-auto pl-5 2xl:pl-1 pr-5 2xl:pr-1">
                          {person.bio.map((bio, index) => {
                            if (index === 0) {
                              return (
                                <p key={index} className="text-sm mt-2" style={{ fontFamily: 'Libre Baskerville', color: '#2a2d7d' }}>
                                  <span className="text-sm font-bold">{person.name}</span> {bio}
                                </p>
                              );
                            } else {
                              return (
                                <p key={index} className="text-sm  mt-1" style={{ fontFamily: 'Libre Baskerville', color: '#2a2d7d' }}>
                                  {bio}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    {people.filter((_, index) => index % 2 !== 0).map((person) => (
                      <div key={person.id} className="bg-transparent overflow-hidden mb-4">
                        <img src={person.image} alt="Person" className="2xl:w-3/4 w-auto object-cover mx-auto block p-3" />
                        <div className="2xl:w-2/3 sm:w-auto mx-auto pl-5 2xl:pl-1 pr-5 2xl:pr-1">
                          {person.bio.map((bio, index) => {
                            if (index === 0) {
                              return (
                                <p key={index} className="text-sm  mt-2" style={{ fontFamily: 'Libre Baskerville', color: '#2a2d7d'  }}>
                                  <span className=" text-sm  font-bold">{person.name}</span> {bio}
                                </p>
                              );
                            } else {
                              return (
                                <p key={index} className="text-sm  mt-1" style={{ fontFamily: 'Libre Baskerville', color: '#2a2d7d'  }}>
                                  {bio}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
      </SectionTeam>
      <section className="section">
      <div 
            className="relative w-full   bg-cover bg-center bg-primary p-6"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat"
            }}
      >        

<div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <div className="p-3">
    <p 
      className="text-xl font-bold mb-4 text-center"
      style={{fontFamily:"Lato"}}
    >
      Nuestros valores
    </p>
    <ul style={{display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
      {
        valores.map((valor) => (
          <li key={valor.id} className="flex flex-col items-center mb-1" >
            <div className="flex min-w-[215px] items-end justify-start">
              <p 
                className="text-gray-700 pr-1 text-base"
                style={{fontFamily:"Libre Baskerville"}}
              >
                {valor.texto}
              </p>
              <img src={valor.img} alt="Imagen 1" className="w-8 h-8" />
            </div>
          </li>
        ))        
      }
    </ul>
  </div>
</div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-5 ">
          <div className="p-6">
              <p 
                className="text-xl font-bold mb-4 text-center"
                style={{fontFamily:"Libre Baskerville" }}
              >¿Tienes una idea para desarrollar o apoyar un proyecto cultural?</p>
              <div className="flex justify-center w-full">
                <button 
                  className="px-3 text-base bg-[#2A2D7D] hover:bg-gray-100 hover:text-[#2A2D7D] text-white font-bold rounded-full transition"
                  style={{fontFamily:'Lato' }}
                >
                  Hablemos
                </button>
            </div>
          </div>
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
