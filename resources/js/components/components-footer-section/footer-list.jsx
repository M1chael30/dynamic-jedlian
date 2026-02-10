import Navlink from "../nav/nav-link";

export default function FooterList({ title, list }) {
 return (
  <div className="flex flex-col items-start">
   <h1 className="ml-4">{title}</h1>
   {list.map((item, index) => (
    <Navlink
     key={index}
     customClassName="text-zinc-400 text-sm"
     link={item.name}
     href={item.path}
     icon={item.icon && <item.icon />}
    />
   ))}
  </div>
 );
}
