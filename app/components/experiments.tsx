import Link from "next/link";

const allExperiments = [
  {
    title: "Verge Motorcycle on Three.js",
    url: "https://verge-experiments.git.saltt.is/",
  },
];

export function Experiments() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">Experiments &amp; demos</h2>
      {allExperiments.map((experiment) => (
        <Link key={experiment.url} className="flex flex-col space-y-1 mb-4" href={`${experiment.url}`} target="_blank">
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">&rarr; {experiment.title}</p>
          </div>
        </Link>
      ))}
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-400 dark:text-neutral-600 tracking-tight text-sm">More soon!</p>
      </div>
    </div>
  );
}
