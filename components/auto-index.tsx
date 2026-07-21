import { Cards, Card } from 'fumadocs-ui/components/card';
import { source } from '@/lib/source';

type PageNode = { type: 'page'; name: React.ReactNode; url: string };
type FolderNode = {
  type: 'folder';
  name: React.ReactNode;
  index?: PageNode;
  children: TreeNode[];
};
type TreeNode = PageNode | FolderNode | { type: 'separator'; name?: React.ReactNode };

function findFolder(nodes: TreeNode[], url: string): FolderNode | undefined {
  for (const node of nodes) {
    if (node.type !== 'folder') {
      continue;
    }
    if (node.index?.url === url) {
      return node;
    }
    const nested = findFolder(node.children, url);
    if (nested) {
      return nested;
    }
  }
  return undefined;
}


export function AutoIndex({ url }: { url: string }) {
  const folder = findFolder(source.getPageTree().children as TreeNode[], url);
  if (!folder) {
    return null;
  }

  const descriptions = new Map(
    source.getPages().map((p) => [p.url, p.data.description]),
  );

  const toCard = (item: PageNode) => (
    <Card
      key={item.url}
      title={item.name}
      href={item.url}
      description={descriptions.get(item.url)}
    />
  );

  const pages = folder.children.filter((c): c is PageNode => c.type === 'page');
  const subFolders = folder.children.filter(
    (c): c is FolderNode => c.type === 'folder',
  );

  return (
    <>
      {pages.length > 0 && <Cards>{pages.map(toCard)}</Cards>}
      {subFolders.map((sf, i) => {
        const items = [
          ...(sf.index ? [sf.index] : []),
          ...sf.children.filter((c): c is PageNode => c.type === 'page'),
        ];
        return (
          <section key={i}>
            <h2>{sf.name}</h2>
            <Cards>{items.map(toCard)}</Cards>
          </section>
        );
      })}
    </>
  );
}
