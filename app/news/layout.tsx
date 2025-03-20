import Sheet from "@/app/components/Sheet";
import Hero from "@/app/components/Hero";

export const revalidate = 60;

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