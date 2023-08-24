import { Catalog } from '../app/types';
import CatalogCard from './CatalogCard';
interface CalalogListProps {
    catalogs: Catalog[];
}
function CatalogList(props: CalalogListProps) {
    const { catalogs } = props;
    //create a map of catalogs
    const references: any = {};
    catalogs.forEach((catalog: any) => {
        references[catalog.spec.name] = catalog;
    });
    return (
        <div className='sitelist'>
            {catalogs.map((catalog: any) =>  
            <CatalogCard catalog={catalog} refCatalog={catalog.spec.metadata?.['override']? references[catalog.spec.metadata['override']]: null}/>)}
        </div>
    );
}
export default CatalogList;