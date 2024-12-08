import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu";
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import NavBarComponent from "@/globals/NavBar/NavBarComponent";
import Image from "next/image";

const payload = await getPayload({ config: configPromise })

const landingPage = await payload.findGlobal({
  slug: 'home',
})

console.log("landingPage", landingPage);
const layout = landingPage?.layout || [];

const LandingPageNavigation = () => {
  return (
    <div className="flex items-center justify-between h-[10vh] w-full px-4 my-4">
      {/* Image Section */}
      <div className="h-full flex items-center">
        {typeof landingPage.image !== 'string' && landingPage.image?.url && (
          <Image
            src={landingPage.image.url}
            alt={landingPage.image.alt}
            className="h-full object-contain"
            width={248}
            height={77}
          />
        )}
      </div>

      {/* Navigation Section */}
      <NavigationMenu className="hidden md:flex items-center justify-end h-full">
        {/* Links only appear on medium and larger screens */}
        <NavigationMenuList className="flex items-center space-x-4">
          {layout?.map((block) => {
            const sectionId = block.blockName ? `#section-${block.blockName}` : undefined;
            if (sectionId) {
              return (
                <NavBarComponent
                  key={block.id}
                  name={block.blockName}
                  navigationLink={sectionId}
                />
              );
            }
            return null;
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );

};

export default LandingPageNavigation;
