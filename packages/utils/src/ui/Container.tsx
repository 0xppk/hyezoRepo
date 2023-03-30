// import Head from "next/head";
// import { ReactNode } from "react";

// interface Props {
//   seo: {
//     title?: string;
//     imagePath?: string;
//     url?: string;
//     description?: string;
//   };
//   action?: ReactNode;
//   children: ReactNode;
// }

// /**
//  * @example
//  * <Container
//  *   title="혜조로그"
//  *   imagePath="/images/2023/default/logo.png"
//  *   url="https://www.hyezoprk.com"
//  *   description="혜조의 블로그"
//  * >
//  *   {children}
//  * </Container>
//  */
// export default function Container({ seo, action, children }: Props) {
//   const { title } = seo;
//   return (
//     <>
//       <Seo seo={seo} />
//       <div className="mx-auto w-full bg-white p-6 shadow-lg dark:bg-gray-800 sm:my-8 sm:max-w-lg sm:rounded-xl">
//         {(title || action) && (
//           <div className="mb-4 flex items-center justify-between">
//             {title && (
//               <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                 {title}
//               </h1>
//             )}
//             {action}
//           </div>
//         )}
//         {children}
//       </div>
//     </>
//   );
// }

// function Seo({ seo }: Pick<Props, "seo">) {
//   const { title, imagePath, url, description } = seo;
//   return (
//     <Head>
//       {title && <title>{title}</title>}
//       <meta property="og:title" content={title} />
//       <link rel="icon" href={imagePath} />
//       <link rel="apple-touch-icon" href={imagePath} />
//       <link rel="mask-icon" href={imagePath} />
//       <meta property="og:image" content={imagePath} />
//       <meta property="og:url" content={url} />
//       <link rel="canonical" href={url} />
//       <meta property="og:description" content={description} />
//       <meta property="og:locale" content="ko_KR" />
//       <meta property="og:type" content="website" />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="robots" content="all" />
//     </Head>
//   );
// }

export {};
