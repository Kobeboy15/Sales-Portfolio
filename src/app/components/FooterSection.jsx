export default function FooterSection() {
  const inspiration = "https://brittanychiang.com/";
  const nextJs = "https://nextjs.org/";
  const tailwindCSS = "https://tailwindcss.com/";
  const vercel = "https://vercel.com/";

  return (
    <footer className="text-slate-700 dark:text-tropical_indigo">
      <div className="text-sm leading-8 opacity-70">
        Inspired heavily by{" "}
        <a
          href={inspiration}
          alt="Brittany Chiang's Web Portfolio"
          className="font-semibold hover:underline"
          target="_blank"
        >
          Brittany Chiang
        </a>
        .<br /> Developed and Deployed by my partner. Built using{" "}
        <a
          className="font-semibold hover:underline"
          alt="NextJs"
          href={nextJs}
          target="_blank"
        >
          NextJs
        </a>{" "}
        and{" "}
        <a
          className="font-semibold hover:underline"
          alt="TailwindCSS"
          href={tailwindCSS}
          target="_blank"
        >
          TailwindCSS
        </a>
        , and deployed and hosted on{" "}
        <a
          className="font-semibold hover:underline"
          href={vercel}
          alt="Vercel"
          target="_blank"
        >
          Vercel
        </a>
        . All text is set in the Inter typeface.
        <br />
        <br />
        ©2024 KC Lamb
      </div>
    </footer>
  );
}
