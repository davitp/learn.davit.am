import { Cards } from 'nextra/components';

export default function PageCards({ directory, pages = [] }){
    return <Cards>
        {pages.map((page, index) => <Cards.Card key={index} title={page.title} arrow href={directory ? `${directory}/${page.key}` : page.key} />)}
    </Cards>
}