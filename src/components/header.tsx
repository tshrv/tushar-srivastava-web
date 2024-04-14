import { Caveat } from "next/font/google";
import { BiEnvelope } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-hw" });

export function Header() {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="text-8xl pb-4">Tushar Srivastava</div>
      <div className="text-4xl">Software Engineer</div>
      <div className="text-2xl">
        I build digital solutions that impact{" "}
        <span className="line-through">thousands</span>.{" "}
        <span className={`${caveat.className} text-4xl`}>millions</span>
      </div>
      <div className="text-4xl flex gap-x-6">
        <BiLogoGithub />
        <BiEnvelope />
        <BiLogoLinkedinSquare />
      </div>
    </div>
  );
}
