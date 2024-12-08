import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "./navigation-menu"

type LayoutBlock = {
    id?: string | null | undefined;
    blockName?: string | null | undefined;
    blockType: 'Hero' | 'Social' | 'section' | string;
  };
  
interface LandingPageNavigationProps {
    layout: (LayoutBlock & { blockType: string })[];
  }

const LandingPageNavigation: React.FC<LandingPageNavigationProps> = ({ layout }) => {
  return (
    <NavigationMenu className="justify-end">
      <div className="flex space-x-4">
        {layout?.map((block) => {
          const sectionId = block.blockName ? `#section-${block.blockName}` : undefined;
          if (sectionId) {
            return (
              <NavigationMenuItem key={block.id}>
                <NavigationMenuLink href={sectionId} className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200">
                  {block.blockName}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }
          return null;
        })}
      </div>
    </NavigationMenu>
  );
};

export default LandingPageNavigation;
