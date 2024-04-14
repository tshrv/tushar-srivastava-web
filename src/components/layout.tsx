import { ReactNode } from "react";

type ContentProps = {
  title: string;
  children?: ReactNode;
};

export function Content({ title, children }: ContentProps) {
  return (
    <div className="w-full flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-4">
        <div className="font-semibold uppercase text-md">{title}</div>
        <div className="flex flex-col gap-y-4 text-xl">{children}</div>
      </div>
    </div>
  );
}

type SkillChipProps = {
  title: string;
};

export function SkillChip({ title }: SkillChipProps) {
  return (
    <span className="bg-gray-200 p-1 px-2 text-sm text-gray-500 font-light rounded-full inline-block m-1">
      {title}
    </span>
  );
}

type SprintProps = {
  designation: string;
  tenure: string;
  organization: string;
  content: ReactNode;
  skills: string[];
};

export function Sprint({
  designation,
  tenure,
  organization,
  content,
  skills,
}: SprintProps) {
  return (
    <div className="flex flex-col text-xl gap-y-2">
      <div className="flex gap-x-2">
        <div className="grow font-medium">
          {designation} · {organization}
        </div>
        <div className="text-sm font-regular uppercase flex items-center">
          {tenure}
        </div>
      </div>
      <div>{content}</div>
      <div className="">
        {skills.map((skill) => (
          <SkillChip title={skill} />
        ))}
      </div>
    </div>
  );
}
