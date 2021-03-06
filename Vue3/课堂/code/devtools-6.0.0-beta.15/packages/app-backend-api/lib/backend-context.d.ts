import { Bridge } from '@vue-devtools/shared-utils';
import { TimelineLayerOptions, App, CustomInspectorOptions, TimelineEventOptions, WithId, ID } from '@vue/devtools-api';
import { AppRecord } from './app-record';
import { DevtoolsApi } from './api';
import { Plugin } from './plugin';
import { DevtoolsHook } from './global-hook';
export interface BackendContext {
    bridge: Bridge;
    hook: DevtoolsHook;
    api: DevtoolsApi;
    appRecords: AppRecord[];
    currentTab: string;
    currentAppRecord: AppRecord;
    currentInspectedComponentId: string;
    plugins: Plugin[];
    currentPlugin: Plugin;
    timelineLayers: TimelineLayer[];
    nextTimelineEventId: number;
    timelineEventMap: Map<ID, TimelineEventOptions & WithId>;
    perfUniqueGroupId: number;
    customInspectors: CustomInspector[];
}
export interface TimelineLayer extends TimelineLayerOptions {
    app: App;
    plugin: Plugin;
    events: (TimelineEventOptions & WithId)[];
}
export interface CustomInspector extends CustomInspectorOptions {
    app: App;
    plugin: Plugin;
    treeFilter: string;
    selectedNodeId: string;
}
export interface CreateBackendContextOptions {
    bridge: Bridge;
    hook: DevtoolsHook;
}
export declare function createBackendContext(options: CreateBackendContextOptions): BackendContext;
