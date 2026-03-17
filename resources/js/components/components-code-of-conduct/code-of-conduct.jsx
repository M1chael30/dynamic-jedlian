import CodeOfConductDesc from "./code-of-conduct-desc";
import CodeOfConductSquare from "./code-of-conduct-square";

export default function CodeOfConduct() {
 return (
  <section className="flex my-12 px-8 gap-8 mx-auto max-w-5xl">
   <CodeOfConductDesc />
   <CodeOfConductSquare />
  </section>
 );
}
