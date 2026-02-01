import PageCards from './page-cards';
import { getPages } from '@/lib/meta';

export default function MetaPageCards({ directory, meta }){
    return <PageCards directory={directory} pages={getPages(meta)}/>
}