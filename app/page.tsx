import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Portfolio</h1>
      <p className="mb-4">
        {`I’m Juri — a Software Engineering Lead with a passion for building focused, scalable systems and guiding teams toward delivering real value with minimal overhead. I take a pragmatic approach to Extreme Programming, emphasizing simplicity, collaboration, and fast feedback loops over ceremony and bloat.
`}
      </p>
      <p className="mb-4">{`I’ve led cross-functional teams, architected full-stack systems, and shipped products that balance technical excellence with business impact. I care about clean code, thoughtful abstractions, and a deep understanding of the problem before jumping to solutions. My work spans real-time infrastructure, developer tooling, and complex UIs — always aiming for outcomes, not overengineering.`}</p>
      <p className="mb-4">{`I’m driven by the challenge of turning ambitious ideas into elegant, working software — and helping others do the same.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
