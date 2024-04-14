import { Content, Sprint } from "./layout";

function SSE_EPAM() {
  return (
    <Sprint
      designation="Senior Software Engineer"
      tenure="Oct 2022 - Oct 2023"
      organization="EPAM Systems"
      content={
        <p>
          Lead a team at{" "}
          <span className="underline decoration-2">Google India</span> to carry
          out feature development and maintenance of a workforce monitoring
          application that aims to monitor several aspects of the workforce such
          as attendance, assignments, support tickets, etc., alongside a
          powerful reporting engine and an admin dashboard.
        </p>
      }
      skills={["Python", "Django", "MySQL", "CI / CD Pipelines"]}
    />
  );
}

function SDE_HV() {
  return (
    <Sprint
      designation="Software Development Engineer"
      tenure="Apr 2021 - Oct 2022"
      organization="Hitachi Vantara"
      content={
        <p>
          Worked with{" "}
          <span className="underline decoration-2">
            Pioneer Natural Resources, USA
          </span>{" "}
          to build custom statistical models consuming real-time data, sourced
          by an ETL pipeline to continuously monitor the wells and trigger
          alerts to prevent catastrophes, saving significant cost for the
          organization, approx $1M for every issue prevented.
        </p>
      }
      skills={[
        "Python",
        "asyncio",
        "FastAPI",
        "MongoDB",
        "ETL Pipelines",
        "Event Driven Architecture",
        "Microservices",
        "Azure (Active Directory, Service Bus, CI/CD Pipelines)",
        "Docker",
        "Nginx",
        "Streamlit",
        "Bokeh",
        "Pandas",
        "Minio",
      ]}
    />
  );
}

export function Work() {
  return (
    <Content title="Work">
      <SSE_EPAM />
      <SDE_HV />
    </Content>
  );
}
