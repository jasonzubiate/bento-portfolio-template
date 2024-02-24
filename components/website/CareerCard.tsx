export default function CareerCard() {
  return (
    <section
      id="career"
      className="flex flex-col p-6 bg-blush-gray rounded-xl w-full gap-4"
    >
      <p className="text-p-text">
        I&apos;m a <span className="text-demo-smoke">creative developer</span>{" "}
        based in <span className="text-demo-smoke">Los Angeles</span>. I have
        two years of experience using{" "}
        <a
          className="text-demo-smoke hover:underline"
          href="https://react.dev/"
          target="_blank"
        >
          React
        </a>{" "}
        and{" "}
        <a
          className="text-demo-smoke hover:underline"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js.
        </a>{" "}
        When I&apos;m not creating, I&apos;m producing, at a music event, or
        having a night out with friends.
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="now" className="uppercase text-demo-smoke text-sm">
          Now
        </label>
        <p className="text-sm text-p-text">
          Full-stack engineer @{" "}
          <a
            href="https://www.trackstack.app/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Trackstack
          </a>
        </p>
        <p className="text-sm text-p-text">
          Founder & freelance web developer @{" "}
          <a
            href="https://www.spinnin.studio/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Spinnin
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="now" className="uppercase text-demo-smoke text-sm">
          Previously
        </label>
        <p className="text-sm text-p-text">
          Machine learning engineer intern @{" "}
          <a
            href="https://www.obviohealth.com/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            ObvioHealth
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="now" className="uppercase text-demo-smoke text-sm">
          Based In
        </label>
        <p className="text-sm text-p-text">Los Angeles, California</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="now" className="uppercase text-demo-smoke text-sm">
          Enjoys
        </label>
        <p className="text-sm text-p-text">
          Tech house, graphic art & technology
        </p>
      </div>
    </section>
  );
}
