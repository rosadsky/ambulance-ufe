/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface RosAmbulanceWlApp {
        "ambulanceId": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
        "basePath": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "base-path"?: string;
    }
    interface RosAmbulanceWlEditor {
        "ambulanceId": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
        "entryId": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "entry-id"?: string;
    }
    interface RosAmbulanceWlList {
        "ambulanceId": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase": string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
    }
}
export interface RosAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRosAmbulanceWlEditorElement;
}
export interface RosAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRosAmbulanceWlListElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRosAmbulanceWlAppElement extends Components.RosAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLRosAmbulanceWlAppElement: {
        prototype: HTMLRosAmbulanceWlAppElement;
        new (): HTMLRosAmbulanceWlAppElement;
    };
    interface HTMLRosAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLRosAmbulanceWlEditorElement extends Components.RosAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRosAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLRosAmbulanceWlEditorElement, ev: RosAmbulanceWlEditorCustomEvent<HTMLRosAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRosAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLRosAmbulanceWlEditorElement, ev: RosAmbulanceWlEditorCustomEvent<HTMLRosAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRosAmbulanceWlEditorElement: {
        prototype: HTMLRosAmbulanceWlEditorElement;
        new (): HTMLRosAmbulanceWlEditorElement;
    };
    interface HTMLRosAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLRosAmbulanceWlListElement extends Components.RosAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLRosAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLRosAmbulanceWlListElement, ev: RosAmbulanceWlListCustomEvent<HTMLRosAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLRosAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLRosAmbulanceWlListElement, ev: RosAmbulanceWlListCustomEvent<HTMLRosAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLRosAmbulanceWlListElement: {
        prototype: HTMLRosAmbulanceWlListElement;
        new (): HTMLRosAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ros-ambulance-wl-app": HTMLRosAmbulanceWlAppElement;
        "ros-ambulance-wl-editor": HTMLRosAmbulanceWlEditorElement;
        "ros-ambulance-wl-list": HTMLRosAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface RosAmbulanceWlApp {
        "ambulanceId"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
        "basePath"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "base-path"?: string;
    }
    interface RosAmbulanceWlEditor {
        "ambulanceId"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
        "entryId"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "entry-id"?: string;
        "onEditor-closed"?: (event: RosAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface RosAmbulanceWlList {
        "ambulanceId"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "ambulance-id"?: string;
        "apiBase"?: string;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "api-base"?: string;
        "onEntry-clicked"?: (event: RosAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ros-ambulance-wl-app": RosAmbulanceWlApp;
        "ros-ambulance-wl-editor": RosAmbulanceWlEditor;
        "ros-ambulance-wl-list": RosAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ros-ambulance-wl-app": LocalJSX.RosAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLRosAmbulanceWlAppElement>;
            "ros-ambulance-wl-editor": LocalJSX.RosAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLRosAmbulanceWlEditorElement>;
            "ros-ambulance-wl-list": LocalJSX.RosAmbulanceWlList & JSXBase.HTMLAttributes<HTMLRosAmbulanceWlListElement>;
        }
    }
}
