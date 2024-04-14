import { Content } from "./layout";

export function About() {
  return (
    <Content title="About me">
      <p>
        I'm a Software Engineer with 5 years of experience in{" "}
        <span className="underline decoration-2">full-stack development</span>,
        specializing in building backends with Python, working with core{" "}
        <span className="underline decoration-2">product engineering</span>{" "}
        teams on <span className="underline decoration-2">data-intensive</span>{" "}
        products and pipelines using microservices and event-driven
        architecture.
      </p>
    </Content>
  );
}
