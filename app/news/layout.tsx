import Sheet from "@/app/components/Sheet";
import Hero from "@/app/components/Hero";


type Props = {
  children: React.ReactNode;
};


export default function NewsLayout({ children }: Props) {
  return (
    <>
    <Hero title ="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}