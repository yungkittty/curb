const discoverySelectors = {};

discoverySelectors.getDiscoveryGlobalSectionGroupsId = state => state.discovery.globalSectionGroups;

discoverySelectors.getDiscoveryCustomSectionGroupsId = state => state.discovery.customSectionGroups;

discoverySelectors.getDiscoveryRandomSectionGroupsId = state => state.discovery.randomSectionGroups;

export default discoverySelectors;
