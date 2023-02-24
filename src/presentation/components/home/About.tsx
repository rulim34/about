import { ChevronRight } from 'react-feather';

type Props = {
  skills: string[];
};

export function About({ skills }: Props) {
  return (
    <section id="about" className="max-w-5xl mx-auto py-14 xs:py-20 md:py-24">
      <h2 className="text-slate-50 text-3xl text-center font-bold">About Me</h2>

      <div>
        <p className="mt-10 text-slate-400 text-lg">
          Hi there! I&#39;m Ahmad Rulim. I&#39;m a technology enthusiast who loves solving problems
          with code.
        </p>

        <p className="mt-4 text-slate-400 text-lg">
          Childhood luck, my uncle has a computer, and he likes to teach me a lot about it. I was
          even in kindergarten when I first learned about the internet and Google. In the fourth
          year of elementary school, I took robotic extracurricular straight to the intermediate
          level. It was my first programming experience with C.
        </p>

        <p className="mt-4 text-slate-400 text-lg">
          In my first year of high school, I built{' '}
          <a href="https://www.kweeksnews.com" className="link">
            KweeksNews
          </a>{' '}
          for my school organization. The COVID-19 pandemic hit my country just moments after,
          forcing school learning to be shifted entirely online. With a lot of free time at home, I
          learned many things about Machine Learning, Web Development, Mobile Development, and
          DevOps through courses at Dicoding Indonesia.
        </p>

        <p className="mt-4 text-slate-400 text-lg">
          Few technologies I&#39;ve been working with recently:
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-2.5 max-w-md mt-4 list-none 2xs:grid-cols-2">
        {skills &&
          skills.map((skill, i) => (
            <li key={i} className="flex flex-nowrap">
              <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cornflower-blue" />
              <p className="flex-grow text-slate-400 font-mono">{skill}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
