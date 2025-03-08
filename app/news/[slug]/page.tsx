import {notFound} from "next/navigation";
import { getNewsDetail} from "@/app/libs/microcms";
import Article from "@/app/components/Article";
import ButtonLink from "@/app/components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };

    searchParams: {
        dk?: string;
    };
};

export default async function Page({ params, searchParams}: Props) {
    const data = await getNewsDetail(params.slug,{
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
        <Article data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
        </>
    );
}