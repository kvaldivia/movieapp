/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MojixMovieCard {
        "genres": string[];
        "name": string;
        "posterUrl": string;
        "summary": string;
    }
    interface MojixTag {
        "disable": boolean;
        "icon": string;
        "link": string;
    }
}
declare global {
    interface HTMLMojixMovieCardElement extends Components.MojixMovieCard, HTMLStencilElement {
    }
    var HTMLMojixMovieCardElement: {
        prototype: HTMLMojixMovieCardElement;
        new (): HTMLMojixMovieCardElement;
    };
    interface HTMLMojixTagElement extends Components.MojixTag, HTMLStencilElement {
    }
    var HTMLMojixTagElement: {
        prototype: HTMLMojixTagElement;
        new (): HTMLMojixTagElement;
    };
    interface HTMLElementTagNameMap {
        "mojix-movie-card": HTMLMojixMovieCardElement;
        "mojix-tag": HTMLMojixTagElement;
    }
}
declare namespace LocalJSX {
    interface MojixMovieCard {
        "genres"?: string[];
        "name"?: string;
        "posterUrl"?: string;
        "summary"?: string;
    }
    interface MojixTag {
        "disable"?: boolean;
        "icon"?: string;
        "link"?: string;
    }
    interface IntrinsicElements {
        "mojix-movie-card": MojixMovieCard;
        "mojix-tag": MojixTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mojix-movie-card": LocalJSX.MojixMovieCard & JSXBase.HTMLAttributes<HTMLMojixMovieCardElement>;
            "mojix-tag": LocalJSX.MojixTag & JSXBase.HTMLAttributes<HTMLMojixTagElement>;
        }
    }
}
