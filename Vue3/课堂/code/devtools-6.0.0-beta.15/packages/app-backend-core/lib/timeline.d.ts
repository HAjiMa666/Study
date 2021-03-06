import { BackendContext } from '@vue-devtools/app-backend-api';
import { App, ID, TimelineEventOptions } from '@vue/devtools-api';
export declare function setupTimeline(ctx: BackendContext): void;
export declare function addBuiltinLayers(app: App, ctx: BackendContext): void;
export declare function sendTimelineLayers(ctx: BackendContext): Promise<void>;
export declare function addTimelineEvent(options: TimelineEventOptions, app: App, ctx: BackendContext): void;
export declare function clearTimeline(ctx: BackendContext): Promise<void>;
export declare function sendTimelineEventData(id: ID, ctx: BackendContext): Promise<void>;
export declare function removeLayersForApp(app: App, ctx: BackendContext): void;
export declare function sendTimelineLayerEvents(appId: number, layerId: string, ctx: BackendContext): void;
