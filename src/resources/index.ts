import { HomeResx, IHomeResx } from "./home";
import { NavigationResx, INavigationResx } from "./navigation";
import { FooterResx, IFooterResx } from "./footer";
import { NotFoundResx, INotFoundResx } from "./notfound";

export var Resources = {
    Home: HomeResx,
    Navigation: NavigationResx,
    Footer: FooterResx,
    NotFound: NotFoundResx,
}

export type IResources = typeof Resources;