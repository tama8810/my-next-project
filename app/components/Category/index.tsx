import type {Category} from "@/app/libs/microcms";
import styles from "./index.module.css";

type Props ={
    cetegory: Category;
};
export default function Category({ category }: Props){
    return <span className = {styles.tag}>{category.name}</span>;
}