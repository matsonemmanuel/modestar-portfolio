
import { motion } from "framer-motion";
import storyPortrait from "../assets/images/mode.jpg";
import lifechangeImage from "../assets/images/lifechange.jpg";

const storyChapters = [
  {
    number: "01",
    title: "Where my story began",
    paragraphs: [
      "I know what it feels like to grow up wondering where you truly belong.",
      "I lost my parents when I was seven years old and grew up moving between three different homes. Each home gave me something, but moving from one place to another also left me with a deep feeling of not belonging.",
      "That experience stayed with me. It shaped the way I understand vulnerability, dignity and the importance of having a place where you feel accepted."
    ]
  },
  {
    number: "02",
    title: "When the path was uncertain",
    paragraphs: [
      "As I grew older, I learned that life does not always give young people the opportunities they deserve. After completing Senior Six, I hoped to continue to university, but without the financial support I needed, that dream could not immediately become a reality.",
      "Finding employment was also difficult. I remember having the determination to build a future but not having the resources or opportunities to take the next step.",
      "Instead of giving up, I chose to leave my comfort zone and volunteer at THEHASA Holdings Company Limited in Kyangwali Refugee Settlement, where I began as a financial clerk. That decision changed the direction of my life."
    ]
  },
  {
    number: "03",
    title: "Finding purpose in Kyangwali",
    paragraphs: [
      "In Kyangwali, I began to see parts of my own story reflected in the lives of others. I met young mothers who had left school and were struggling to provide for their children. I met young people who had dropped out of school and were being judged by what they had lost rather than what they could still become.",
      "I also encountered persons with disabilities who were often excluded from opportunities to build independent lives, alongside young people with ideas, energy and potential but very few pathways to turn that potential into a livelihood.",
      "These experiences made me ask a simple question: What if adversity did not have to determine a young person's future?"
    ]
  },
  {
    number: "04",
    title: "Turning conviction into action",
    paragraphs: [
      "I came to believe that difficult circumstances can shape a person's life without defining their ability. A young mother should not be defined only by leaving school. A school dropout should not be defined by an examination result. A person with a disability should not be defined by what they cannot do.",
      "This conviction became central to my decision to co-found THEHASA Foundation in Kyangwali Refugee Settlement. Through vocational skills development, protection and education, we seek to create practical pathways for people who are often left at the margins, particularly school dropouts, young mothers, persons with disabilities and other vulnerable young people in refugee and host communities.",
      "I believe practical skills can give someone more than an income. They can build confidence, independence, dignity and a sense of belonging. Our work is about helping young people discover what they can learn, create, contribute and become."
    ]
  },
  {
    number: "05",
    title: "A purpose beyond recognition",
    paragraphs: [
      "Today, the work matters to me because I see my younger self in many of the people we serve. I do not want young people to believe that their circumstances have already decided their future.",
      "For me, vocational education is not simply about teaching someone how to sew, build, weld, farm or use a computer. It is about helping someone move from asking, 'Who will help me?' to asking, 'What can I build with what I have?' That shift is where resilience begins.",
      "I have come to understand leadership not as recognition for what I have achieved, but as the responsibility to create opportunities for someone else to discover what they can become."
    ]
  }
];

function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#F8F6F1] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
            Beyond the titles and achievements
          </span>

          <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#0B1F33] md:text-6xl">
            Her Story
            <span className="mt-3 block text-2xl font-normal italic text-[#1D4E89] md:text-4xl">
              The Journey Behind the Purpose
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-20 bg-[#C8A45D]" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#667085] md:text-lg">
            Every journey has a beginning. Mine is a story of loss,
            uncertainty, resilience and the conviction that every
            young person deserves an opportunity to become more than
            their circumstances.
          </p>
        </motion.div>

        {/* Opening editorial feature */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -right-4 -top-4 h-full w-full border border-[#C8A45D]" />

            <img
              src={storyPortrait}
              alt="Modestar Kabasinguzi"
              className="relative z-10 aspect-[4/5] w-full object-cover object-top"
            />

            <div className="absolute -bottom-5 -left-5 z-20 bg-[#0B1F33] px-6 py-5 text-[#F8F6F1] shadow-xl">
              <p className="font-serif text-xl italic">
                "A life shaped by purpose."
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#C8A45D]">
                Modestar Kabasinguzi
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="pt-5 lg:pt-0"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              A personal reflection
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-snug text-[#0B1F33] md:text-4xl">
              "I know what it feels like to grow up wondering where you truly belong."
            </h3>

            <div className="my-7 h-px w-16 bg-[#C8A45D]" />

            <p className="text-base leading-8 text-[#667085]">
              I lost my parents when I was seven years old. Growing up
              across three different homes taught me early about
              uncertainty and the importance of belonging. Years later,
              my experiences in Kyangwali would help me recognise those
              same feelings in the lives of other young people.
            </p>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              What began as a personal journey gradually became a
              commitment to helping others find opportunity, dignity
              and the confidence to shape their own futures.
            </p>
          </motion.div>
        </div>

        {/* Story chapters */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              The chapters of my journey
            </span>
            <h3 className="mt-4 font-serif text-3xl text-[#0B1F33] md:text-4xl">
              Experiences that shaped my purpose
            </h3>
          </div>

          <div className="space-y-0">
            
{storyChapters.map((chapter) => (
  <>
    <motion.article
      key={chapter.number}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: 0.05 }}
      className="grid gap-5 border-t border-[#D9D4C9] py-12 md:grid-cols-[110px_1fr] md:gap-10 md:py-16"
    >
      <div>
        <span className="font-serif text-4xl text-[#C8A45D]">
          {chapter.number}
        </span>
        <div className="mt-4 hidden h-10 w-px bg-[#C8A45D] md:block" />
      </div>

      <div>
        <h4 className="mb-7 font-serif text-2xl text-[#0B1F33] md:text-3xl">
          {chapter.title}
        </h4>

        <div className="max-w-3xl space-y-5">
          {chapter.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="text-base leading-8 text-[#667085] md:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.article>

    {/* Community engagement photograph after Chapter 03 */}
    {chapter.number === "03" && (
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative my-10 md:my-16"
      >
        <div className="absolute -left-3 -top-3 h-full w-full border border-[#C8A45D] md:-left-5 md:-top-5" />

        <img
          src={lifechangeImage}
          alt="A woman speaking to a group of young people during a community gathering."
          className="relative z-10 max-h-[620px] w-full object-cover object-center"
        />

        <figcaption className="relative z-10 mt-5 flex flex-col gap-2 border-l-2 border-[#C8A45D] pl-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif text-lg italic text-[#0B1F33]">
            Creating spaces for dialogue, learning and opportunity.
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
            Community Engagement
          </span>
        </figcaption>
      </motion.figure>
    )}
  </>
))}

          </div>
        </div>

        {/* Closing philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden bg-[#0B1F33] px-7 py-16 text-center md:px-16 md:py-24"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A45D]">
            What continues to inspire me
          </span>

          <div className="mx-auto mt-8 max-w-4xl">
            <span className="font-serif text-6xl leading-none text-[#C8A45D]">
              “
            </span>

            <blockquote className="font-serif text-2xl leading-relaxed text-[#F8F6F1] md:text-4xl">
              The greatest trophies in life are not the medals one owns,
              but the tears we wipe away from people's eyes.
            </blockquote>

            <div className="mx-auto my-8 h-px w-16 bg-[#C8A45D]" />

            <p className="text-sm leading-7 text-[#D5DCE5] md:text-base">
              For me, leadership is about creating opportunities for
              someone else to discover that their circumstances are
              not the final definition of who they can become.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              Modestar Kabasinguzi
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Story;
