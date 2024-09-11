import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a full-stack developer based in Biarritz, with a strong interest in making technology more accessible and efficient.`}
      </p>
      <p className="mb-4">
        {`I enjoy working on AI, automation, and web development projects and have experience with languages like Python, JavaScript, TypeScript, PHP, and frameworks like Next.js, React.js, Symfony, and Django. I’ve worked on e-commerce tech in the past, and I’m always exploring new areas in tech.`}
      </p>
      <p className="mb-4">{` Along the way, I’ve picked up some certifications in AWS, Stripe, some introduction to Machine Learning. I also enjoy tutoring math and I really like to share my knowledge with others.`}</p>
      <p className="mb-4">
        I hold two master's degrees: one in International Business from{" "}
        <Link
          className="underline italic"
          href={"https://www.hec.edu/en/master-s-programs/master-management"}
        >
          HEC Paris{" "}
        </Link>
        and another in Advanced Mathematics and Mechanics from{" "}
        <Link
          className="underline italic"
          href={
            "https://www.isae-supaero.fr/en/academics/ingenieur-isae-supaero-msc/engineering-program/"
          }
        >
          ISAE-SUPAERO
        </Link>
        .
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
