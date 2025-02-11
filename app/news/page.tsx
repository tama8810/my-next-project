import { getNewsList } from "@/app/libs/microcms";
import NewsList from "@/app/components/NewsList";

export default async function Page() {
    const { contents: news} = await getNewsList();
    return <NewsList news={news} />;
}