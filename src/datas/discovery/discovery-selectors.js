const discoverySelectors = {};

discoverySelectors.getDiscoveryGlobalSectionGroupsId = state => state.discovery.globalSectionGroupsId;

discoverySelectors.getDiscoveryCustomSectionGroupsId = state => state.discovery.customSectionGroupsId;

discoverySelectors.getDiscoveryRandomSectionGroupsId = state => state.discovery.randomSectionGroupsId;

export default discoverySelectors;
